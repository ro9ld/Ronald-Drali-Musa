import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Ronald Musa — Admin")
    .items([
      S.listItem()
        .title("Work (Videos & Photos)")
        .child(S.documentTypeList("portfolioItem").title("Work")),
      S.listItem()
        .title("Trusted by (Partners)")
        .child(S.documentTypeList("partner").title("Partners")),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
    ]);
