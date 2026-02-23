export interface GuideArticle {
  title: string;
  slug: string;
  excerpt: string;
  topicTags: string[];
  publishDate: string;
  content: string[];
}

export const loadGuides = async (): Promise<GuideArticle[]> => {
  const response = await fetch("/content/guides.json");
  if (!response.ok) {
    return [];
  }
  return (await response.json()) as GuideArticle[];
};

export const setPageMeta = (title: string, description: string) => {
  document.title = title;

  const upsertMeta = (property: "description" | "og:title" | "og:description", content: string) => {
    const isOg = property.startsWith("og:");
    const selector = isOg ? `meta[property="${property}"]` : `meta[name="${property}"]`;
    let el = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      if (isOg) {
        el.setAttribute("property", property);
      } else {
        el.setAttribute("name", property);
      }
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  upsertMeta("description", description);
  upsertMeta("og:title", title);
  upsertMeta("og:description", description);
};
