import type { PostHideElements } from "~/content/config";

export const Site = "https://astro-blog-zozo.pages.dev";
export const SiteLanguage = "en";
export const SiteTitle = "Millie";
export const SiteDescription = "How to take care of Millie";
export const FooterDescription = "";
export const AdminName = "Ladit";
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
  "data-repo": "ladit/astro-blog-zozo",
  "data-repo-id": "R_kgDOLgobXQ",
  "data-category": "Announcements",
  "data-category-id": "DIC_kwDOLgobXc4Cd_N6",
  "data-mapping": "pathname",
  "data-strict": "0",
  "data-reactions-enabled": "1",
  "data-emit-metadata": "0",
  "data-input-position": "top",
  "data-lang": "zh-CN",
  "data-loading": "lazy",
  crossorigin: "anonymous",
  async: "",
};

export type HideElements =
  | PostHideElements
  | "logo"
  | "search"
  | "themeToggler"
  | "siteDescription"
  | "footerDescription";
// Always hide elements from site
export const Hide: HideElements[] = [];
