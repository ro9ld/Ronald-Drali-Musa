import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "ronaldmusa",
  title: "Ronald Musa — Admin",
  basePath: "/admin",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    // Vision lets you run raw queries from inside the Studio — handy for
    // debugging, safe to remove later if you never use it.
    visionTool(),
  ],
});
