import { useEffect } from "react";

const SITE_URL = "https://xn--elik-fua.rs"; // čelik.rs (punycode — matches robots.txt / sitemap.xml)
const SITE_NAME = "ČELIK.rs";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;
const STRUCTURED_DATA_TAG_ID = "seo-structured-data";

interface SEOOptions {
  /** Full <title> tag content, already including the " | ČELIK.rs" suffix if wanted. */
  title: string;
  /** Meta description, ideally 120–160 characters. */
  description: string;
  /** Route path starting with "/", e.g. "/proizvod/eco-green". Defaults to "/". */
  path?: string;
  /** Absolute or root-relative image URL for og:image. */
  image?: string;
  /** og:type — "website" or "product" etc. */
  type?: string;
  /** Arbitrary JSON-LD object (or array of objects) to inject as <script type="application/ld+json">. */
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  /** Set true on pages that should not be indexed (e.g. 404). */
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

/**
 * Sets document.title, meta description, canonical URL, Open Graph tags,
 * robots directive and (optionally) JSON-LD structured data for the
 * currently mounted page. Safe to call from every route component —
 * it updates the existing tags declared in index.html rather than
 * duplicating them, so every route ends up with its own accurate
 * title/description instead of sharing the homepage's defaults.
 */
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
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = title;

    upsertMetaByAttr("name", "description", description);
    upsertMetaByAttr("property", "og:title", title);
    upsertMetaByAttr("property", "og:description", description);
    upsertMetaByAttr("property", "og:url", canonicalUrl);
    upsertMetaByAttr("property", "og:image", image);
    upsertMetaByAttr("property", "og:type", type);
    upsertMetaByAttr("property", "og:site_name", SITE_NAME);

    upsertLink("canonical", canonicalUrl);

    upsertMetaByAttr("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // Structured data (JSON-LD) — only one dynamic block at a time.
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

    // Cleanup: remove the page-specific JSON-LD when navigating away so it
    // never leaks into a page that didn't ask for it.
    return () => {
      if (structuredData) {
        document.getElementById(STRUCTURED_DATA_TAG_ID)?.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, type, noindex, JSON.stringify(structuredData ?? null)]);
}

export { SITE_URL, SITE_NAME };