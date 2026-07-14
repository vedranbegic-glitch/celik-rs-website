import { useParams, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SCRIPT_CONTENT, FIRE_PIT_PRODUCT } from "./Home";

type ContentBlock =
  | { type: "paragraph"; text: string; bold?: boolean }
  | { type: "heading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "divider" }
  | { type: "emphasis"; lines: string[] };

function DetailBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="max-w-2xl">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={idx}
                className={`text-zinc-700 text-base leading-relaxed mb-5 ${block.bold ? "font-bold text-zinc-900" : ""}`}
              >
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={idx} className="text-2xl font-black text-zinc-900 mb-4 mt-2">
                {block.text}
              </h2>
            );
          case "bullets":
            return (
              <ul key={idx} className="space-y-2 mb-5">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-700 text-base leading-relaxed">
                    <span className="text-orange-600 font-black mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "divider":
            return <div key={idx} className="border-t border-zinc-200 my-8"></div>;
          case "emphasis":
            return (
              <div key={idx} className="border-l-4 border-orange-600 pl-5 my-8">
                {block.lines.map((line, i) => (
                  <p key={i} className="text-xl font-black text-zinc-900 leading-snug">
                    {line}
                  </p>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product =
    SCRIPT_CONTENT.matrix.scenarios.find((s) => s.slug === slug) ||
    (slug === FIRE_PIT_PRODUCT.slug ? FIRE_PIT_PRODUCT : undefined);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 px-4 text-center">
        <h1 className="text-2xl font-black text-zinc-900 mb-4">Proizvod nije pronađen</h1>
        <Link href="/" className="text-orange-600 font-bold uppercase text-sm hover:text-orange-700">
          ← Nazad na početnu
        </Link>
      </div>
    );
  }

  const detail = (product as any).detail as { tagline: string; blocks: ContentBlock[] } | undefined;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans antialiased">
      {/* Simple top bar */}
      <nav className="w-full bg-white border-b border-zinc-200 h-16 flex items-center px-4">
        <div className="max-w-4xl w-full mx-auto flex items-center justify-between">
          <img src="/logo.png" alt="ČELIK logo" style={{ height: "36px", width: "auto" }} />
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-700 hover:text-orange-600 font-semibold text-xs uppercase transition-colors"
          >
            <ArrowLeft size={16} />
            Nazad na sajt
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div
          className="h-72 md:h-96 bg-cover bg-center bg-zinc-200 mb-8"
          style={{ backgroundImage: `url('${product.variants[0].img}')` }}
        ></div>

        <div className="inline-block bg-blue-900/8 text-blue-900 px-3 py-1 rounded-none text-xs font-black uppercase mb-4 w-fit">
          {product.badge}
        </div>

        <h1 className="text-3xl md:text-4xl font-black tracking-normal text-zinc-900 mb-4">
          {product.title}
        </h1>

        <p className="text-sm font-bold text-blue-800 mb-6 uppercase tracking-wide">
          {product.useCase}
        </p>

        {detail ? (
          <>
            <p className="text-xl md:text-2xl font-bold text-zinc-900 mb-8 max-w-2xl leading-snug">
              {detail.tagline}
            </p>
            <DetailBlocks blocks={detail.blocks} />
          </>
        ) : (
          <>
            <p className="text-zinc-700 text-base leading-relaxed mb-10 max-w-2xl">
              {product.benefit}
            </p>
            <div className="bg-white border border-zinc-200 p-6 mb-10 max-w-2xl">
              <p className="text-sm text-zinc-500 italic">
                Detaljne specifikacije, primeri primene i galerija fotografija biće dodati uskoro — proizvod je trenutno u fazi izrade prvih uzoraka.
              </p>
            </div>
          </>
        )}

        <Link
          href="/#contact"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-black text-sm uppercase px-8 py-4 rounded-none shadow-sm transition-colors mt-4"
        >
          Pošaljite Upit za Ovaj Proizvod
        </Link>
      </div>
    </div>
  );
}
