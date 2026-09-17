"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ResolvedPortfolioItem } from "@/lib/sanity/queries";
import {
  VideoIcon,
  StackIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
  SoundIcon,
  MuteIcon,
} from "./icons";
import { trackEvent } from "@/lib/analytics";

function isStack(item: ResolvedPortfolioItem) {
  return !!item.photos && item.photos.length > 1;
}

function coverUrl(item: ResolvedPortfolioItem): string | undefined {
  if (!item.hasRealMedia) return undefined;
  if (item.mediaType === "video") return item.coverImageUrl;
  return item.photos?.[0];
}

function Tile({ item, index, onOpen }: { item: ResolvedPortfolioItem; index: number; onOpen: () => void }) {
  const label = isStack(item)
    ? `Open photo set of ${item.photos!.length}, item ${index + 1}`
    : `Open ${item.mediaType}, item ${index + 1}`;
  const cover = coverUrl(item);

  return (
    <button onClick={onOpen} className="grid-tile block w-full text-left" aria-label={label}>
      <div className="grid-tile-media">
        {cover ? (
          <Image src={cover} alt="" fill className="object-cover" sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 33vw" />
        ) : (
          <span className="px-3 text-center text-[10.5px] leading-snug text-grey">
            {item.placeholderLabel}
          </span>
        )}
        {item.mediaType === "video" && (
          <span className="grid-tile-type-icon">
            <VideoIcon />
          </span>
        )}
        {isStack(item) && (
          <span className="grid-tile-type-icon">
            <StackIcon />
          </span>
        )}
      </div>
    </button>
  );
}

interface Props {
  items: ResolvedPortfolioItem[];
}

export default function PortfolioSection({ items }: Props) {
  const visible = items.filter((i) => i.visible).sort((a, b) => a.order - b.order);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [stackIndex, setStackIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const currentItem = openIndex !== null ? visible[openIndex] : null;

  const open = useCallback((index: number) => {
    setOpenIndex(index);
    setStackIndex(0);
    setPlaying(true);
    setMuted(false);
    const item = visible[index];
    trackEvent("Portfolio Item Open", { id: item.id, mediaType: item.mediaType });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const close = useCallback(() => setOpenIndex(null), []);

  // Forward: step through a photo stack first, then move to the next grid
  // item once the stack is exhausted — carousel-then-next-post flow.
  const next = useCallback(() => {
    if (openIndex === null) return;
    const item = visible[openIndex];
    if (isStack(item) && stackIndex < item.photos!.length - 1) {
      setStackIndex((s) => s + 1);
    } else {
      setOpenIndex((openIndex + 1) % visible.length);
      setStackIndex(0);
      setPlaying(true);
    }
  }, [openIndex, stackIndex, visible]);

  const prev = useCallback(() => {
    if (openIndex === null) return;
    if (stackIndex > 0) {
      setStackIndex((s) => s - 1);
    } else {
      const prevIndex = (openIndex - 1 + visible.length) % visible.length;
      const prevItem = visible[prevIndex];
      setOpenIndex(prevIndex);
      setStackIndex(isStack(prevItem) ? prevItem.photos!.length - 1 : 0);
      setPlaying(true);
    }
  }, [openIndex, stackIndex, visible]);

  useEffect(() => {
    if (!currentItem) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") { e.preventDefault(); setPlaying((p) => !p); }
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [currentItem, close, next, prev]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  }

  const viewerImage = currentItem?.hasRealMedia
    ? isStack(currentItem)
      ? currentItem.photos![stackIndex]
      : currentItem.mediaType === "photo"
        ? currentItem.photos?.[0]
        : undefined // video playback wires in once Mux is connected
    : undefined;
  const viewerLabel = currentItem?.placeholderLabel ?? "";
  const viewerRatio = currentItem?.mediaType === "video" ? "9 / 16" : "4 / 5";
  const showVideoControls = currentItem?.mediaType === "video";

  return (
    <>
      <div className="grid grid-cols-3 gap-[1.5px] sm:gap-[3px] md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {visible.map((item, i) => (
          <Tile key={item.id} item={item} index={i} onOpen={() => open(i)} />
        ))}
      </div>

      {currentItem && (
        <div
          className="viewer-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/97 p-4"
          onClick={close}
        >
          <button onClick={close} aria-label="Close" className="icon-btn viewer-control right-4 top-4 sm:right-8 sm:top-8">
            <CloseIcon />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="icon-btn viewer-control left-2 top-1/2 -translate-y-1/2 sm:left-6"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="icon-btn viewer-control right-2 top-1/2 -translate-y-1/2 sm:right-6"
          >
            <ChevronRightIcon />
          </button>

          <div
            className="viewer-media"
            style={{ aspectRatio: viewerRatio }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="grid-tile-media">
              {viewerImage ? (
                <Image src={viewerImage} alt="" fill className="object-contain" sizes="92vw" />
              ) : (
                <span className="px-6 text-center text-sm text-grey">{viewerLabel}</span>
              )}
              {currentItem && isStack(currentItem) && (
                <div className="viewer-dots">
                  {currentItem.photos!.map((_, i) => (
                    <span key={i} className={`viewer-dot ${i === stackIndex ? "active" : ""}`} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {showVideoControls && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setPlaying((p) => !p); }}
                aria-label={playing ? "Pause" : "Play"}
                className="icon-btn viewer-control bottom-4 left-1/2 -translate-x-1/2"
              >
                {playing ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setMuted((m) => !m); }}
                aria-label={muted ? "Unmute" : "Mute"}
                className="icon-btn viewer-control bottom-4 right-4"
              >
                {muted ? <MuteIcon /> : <SoundIcon />}
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
