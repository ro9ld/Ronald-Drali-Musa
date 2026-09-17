"use client";

import dynamic from "next/dynamic";
import config from "@/sanity.config";

// Sanity Studio is a pure client-side app. Loading it dynamically with
// ssr:false keeps its dependency graph (and the swr/react-server export
// conflict it triggers) entirely out of the server build.
const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function AdminPage() {
  return <NextStudio config={config} />;
}
