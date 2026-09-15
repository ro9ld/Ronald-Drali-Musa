// Fires a Plausible custom event if the Plausible script is loaded (see
// README for how to add your Plausible domain). Safe no-op otherwise, so
// this can be called from anywhere without guarding every call site.

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function trackEvent(event: string, props?: Record<string, string>) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(event, props ? { props } : undefined);
  }
}
