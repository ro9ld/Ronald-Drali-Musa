"use client";

import { useState } from "react";
import type { ResolvedPortfolioItem } from "@/lib/sanity/queries";
import { WorkIcon, VideoIcon, PhotoIcon } from "./icons";
import PortfolioSection from "./PortfolioSection";

type MediaType = "video" | "photo";

export default function WorkSection({ workItems }: { workItems: ResolvedPortfolioItem[] }) {
  const [filter, setFilter] = useState<MediaType | null>(null);

  function toggle(type: MediaType) {
    setFilter((f) => (f === type ? null : type));
  }

  const items = filter ? workItems.filter((i) => i.mediaType === filter) : workItems;

  return (
    <>
      <div className="section-label text-[13.5px]" style={{ margin: "28px 0 10px" }}>
        <WorkIcon />
        <span>Work</span>
      </div>

      <div className="flex gap-2 pb-3">
        <button
          className={`filter-pill ${filter === "video" ? "active" : ""}`}
          onClick={() => toggle("video")}
        >
          <VideoIcon />
          <span>Video</span>
        </button>
        <button
          className={`filter-pill ${filter === "photo" ? "active" : ""}`}
          onClick={() => toggle("photo")}
        >
          <PhotoIcon />
          <span>Photo</span>
        </button>
      </div>

      <PortfolioSection items={items} />
    </>
  );
}
