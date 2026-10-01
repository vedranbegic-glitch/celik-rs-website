import { useEffect } from "react";

const SITE_URL = "https://modularnisistemi.com";
const SITE_NAME = "Modularni Sistemi";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;
const STRUCTURED_DATA_TAG_ID = "seo-structured-data";

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

function upsertMetaByAttr(attrName: "name" | "property", attrValue: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function toAbsoluteUrl(urlOrPath: string): string {
  if (urlOrPath.startsWith("http://") || urlOrPath.startsWith("https://")) {
    return urlOrPath;
  }
  const cleanPath = urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`;
  return `${SITE_URL}${cleanPath}`;
}

export function useSEO({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  structuredData,
  noindex = false,
}: SEOOptions) {
  useEffect(() => {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const canonicalUrl = `${SITE_URL}${cleanPath}`;
    const absoluteImageUrl = toAbsoluteUrl(image);

    document.title = title;

    // Standard meta
    upsertMetaByAttr("name", "description", description);
    upsertMetaByAttr("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertLink("canonical", canonicalUrl);

    // OpenGraph
    upsertMetaByAttr("property", "og:title", title);
    upsertMetaByAttr("property", "og:description", description);
    upsertMetaByAttr("property", "og:url", canonicalUrl);
    upsertMetaByAttr("property", "og:image", absoluteImageUrl);
    upsertMetaByAttr("property", "og:type", type);
    upsertMetaByAttr("property", "og:site_name", SITE_NAME);

    // Twitter Cards
    upsertMetaByAttr("name", "twitter:card", "summary_large_image");
    upsertMetaByAttr("name", "twitter:title", title);
    upsertMetaByAttr("name", "twitter:description", description);
    upsertMetaByAttr("name", "twitter:image", absoluteImageUrl);

    // JSON-LD Structured Data
    const existingScript = document.getElementById(STRUCTURED_DATA_TAG_ID);
    if (structuredData) {
      const script = existingScript ?? document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.id = STRUCTURED_DATA_TAG_ID;
      script.textContent = JSON.stringify(structuredData);
      if (!existingScript) document.head.appendChild(script);
    } else if (existingScript) {
      existingScript.remove();
    }

    return () => {
      if (structuredData) {
        document.getElementById(STRUCTURED_DATA_TAG_ID)?.remove();
      }
    };
  }, [title, description, path, image, type, noindex, JSON.stringify(structuredData ?? null)]);
}

export { SITE_URL, SITE_NAME };