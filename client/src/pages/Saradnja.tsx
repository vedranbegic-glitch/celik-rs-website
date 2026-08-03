import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useSEO, SITE_URL } from "@/hooks/useSEO";

const PAGE_TITLE = "Saradnja sa arhitektama i projektantima | ČELIK.rs";
const PAGE_DESCRIPTION =
  "Tehnička podrška, razvoj proizvoda i izrada rešenja prema projektu. ČELIK.rs sarađuje sa arhitektama, projektantima, investitorima i izvođačima radova.";

const WHAT_YOU_GET = [
  "Tehničku podršku tokom razvoja projekta",
  "3D modele i vizuelizacije",
  "DWG i DXF tehničku dokumentaciju",
  "Predloge konstrukcionih rešenja",
  "Prilagođavanje dimenzija i konfiguracije",
  "Konsultacije pri izboru materijala i završnih obrada",
  "Izradu proizvoda prema projektnoj dokumentaciji",
];

const COLLABORATORS = [
  "Arhitektama",
  "Projektantskim biroima",
  "Građevinskim kompanijama",
  "Izvođačima radova",
  "Investitorima privatnih i poslovnih objekata",
  "Dizajnerima enterijera i eksterijera",
];

export default function Saradnja() {
  const [isDrawingOpen, setIsDrawingOpen] = useState(false);
  const [drawingZoom, setDrawingZoom] = useState(1);

  // Close the technical drawing lightbox on ESC
  useEffect(() => {
    if (!isDrawingOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawingOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDrawingOpen]);

  // Per-page SEO: title, meta description, canonical, OG tags + structured data
  useSEO({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/saradnja-sa-arhitektama",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Tehnička podrška i saradnja za arhitekte i projektante",
      provider: { "@type": "Organization", name: "ČELIK.rs", url: SITE_URL },
      areaServed: "RS",
      description: PAGE_DESCRIPTION,
    },
  });

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
      {/* Simple top bar */}
      <nav className="w-full bg-white border-b border-zinc-200 h-16 flex items-center px-4">
        <div className="max-w-5xl w-full mx-auto flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="ČELIK logo" style={{ height: "36px", width: "auto" }} />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-700 hover:text-orange-600 font-semibold text-xs uppercase transition-colors"
          >
            <ArrowLeft size={16} />
            Nazad na sajt
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-zinc-50 py-16 md:py-24 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-4">
            Tehnička podrška · Projektovanje · Izrada po meri
          </p>
          <h1 className="text-3xl md:text-5xl font-black tracking-normal text-zinc-900 mb-6 leading-tight">
            Imate ideju? Mi možemo da je realizujemo.
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Tehnička podrška, projektovanje i izrada rešenja prema zahtevima projekta.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        {/* INTRO */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4">
            Saradnja sa arhitektama, projektantima i investitorima
          </h2>
          <p className="text-xl font-bold text-zinc-900 mb-6 leading-snug">
            Od prve ideje do gotovog proizvoda.
          </p>
          <p className="text-zinc-700 text-base leading-relaxed mb-4">
            Pružamo tehničku podršku arhitektama, projektantima, građevinskim kompanijama i investitorima tokom razvoja i realizacije projekata.
          </p>
          <p className="text-zinc-700 text-base leading-relaxed">
            Pošaljite nam skicu, tehnički crtež ili projektnu dokumentaciju — zajedno ćemo pronaći tehničko rešenje prilagođeno vašem projektu.
          </p>
        </div>

        {/* PROJEKTUJETE. MI REALIZUJEMO. */}
        <div className="border-l-4 border-orange-600 pl-6 mb-16">
          <p className="text-2xl font-black text-zinc-900 mb-4 leading-snug">
            Projektujete. Mi realizujemo.
          </p>
          <p className="text-zinc-700 text-base leading-relaxed mb-4">
            Ne postoje dva identična projekta, pa ne nudimo isključivo gotova rešenja. Prilagođavamo dimenzije, konstrukcione detalje, način montaže i konfiguraciju proizvoda konkretnim zahtevima svakog projekta.
          </p>
          <p className="text-zinc-700 text-base leading-relaxed">
            Naš cilj je jednostavan — da tehničku ideju pretvorimo u funkcionalan, izvodljiv proizvod.
          </p>
        </div>

        {/* ŠTA DOBIJATE */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-8">Šta dobijate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHAT_YOU_GET.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-zinc-50 border border-zinc-200 p-5">
                <span className="text-orange-600 font-black mt-0.5">✓</span>
                <span className="text-zinc-800 text-sm font-semibold leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRIMER TEHNIČKE DOKUMENTACIJE */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4">
            Primer tehničke dokumentacije
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-6">
            Ovako izgleda tehnička dokumentacija koju izrađujemo za svaki projekat — sa kotiranim prikazima, rastavljenim delovima i kompletnim tehničkim karakteristikama.
          </p>
          <button
            type="button"
            onClick={() => { setDrawingZoom(1); setIsDrawingOpen(true); }}
            className="w-full border border-zinc-200 cursor-zoom-in block"
            aria-label="Uvećaj tehnički crtež"
          >
            <img
              src="/tehnicki-crtez-modularna-celicna-podkonstrukcija-1000x1000.jpg"
              alt="Tehnički crtež - Modularna čelična podkonstrukcija 1000x1000mm"
              className="w-full h-auto object-contain block"
            />
          </button>
        </div>

        {/* OD SKICE DO GOTOVOG PROIZVODA */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4">
            Od skice do gotovog proizvoda
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-4">
            Neki projekti zahtevaju potpuno novo rešenje, drugi prilagođavanje postojećih sistema. Bilo da je potrebno razviti jedan element, prototip ili realizovati projekat većih dimenzija — svakom zadatku pristupamo pojedinačno.
          </p>
          <p className="text-zinc-700 text-base leading-relaxed">
            Kvalitetno rešenje nastaje kombinacijom dobre ideje, preciznog tehničkog razvoja i pouzdane proizvodnje.
          </p>
        </div>

        {/* SARAĐUJEMO SA */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6">Sarađujemo sa</h2>
          <div className="flex flex-wrap gap-3">
            {COLLABORATORS.map((item) => (
              <span
                key={item}
                className="bg-blue-900/8 text-blue-900 text-xs font-black uppercase tracking-wide px-4 py-3"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4">
            Imate ideju? Pošaljite nam projekat.
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Pošaljite PDF dokumentaciju, DWG ili DXF crteže, skicu, fotografiju postojećeg rešenja ili 3D model — predložićemo tehničko rešenje u skladu sa zahtevima vašeg projekta.
          </p>
          <a
            href="mailto:modularnipodnisistem@gmail.com?subject=Tehnička%20analiza%20projekta&body=Poštovani%2C%0A%0AŽeleo/la%20bih%20da%20pošaljem%20projekat%20na%20tehničku%20analizu.%0A%0AU%20prilogu%3A%0A-%20%0A%0AKratak%20opis%20projekta%3A%0A-%20"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-black text-sm uppercase px-8 py-4 rounded-none shadow-sm transition-colors"
          >
            Pošaljite projekat na tehničku analizu →
          </a>
        </div>
      </div>

      {/* TECHNICAL DRAWING ZOOM LIGHTBOX */}
      {isDrawingOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
          onClick={() => setIsDrawingOpen(false)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsDrawingOpen(false);
            }}
            aria-label="Zatvori prikaz"
            className="fixed top-4 right-4 z-[1000] w-12 h-12 flex items-center justify-center bg-black/70 hover:bg-black text-white text-2xl rounded-full"
            style={{ touchAction: "manipulation" }}
          >
            ✕
          </button>

          {/* Zoom controls */}
          <div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-2 bg-black/70 rounded-full px-2 py-2"
            onClick={(e) => e.stopPropagation()}
            style={{ touchAction: "manipulation" }}
          >
            <button
              type="button"
              onClick={() => setDrawingZoom((z) => Math.max(1, +(z - 0.5).toFixed(1)))}
              disabled={drawingZoom <= 1}
              aria-label="Umanji"
              className="w-11 h-11 flex items-center justify-center text-white text-xl font-black rounded-full hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              −
            </button>
            <span className="text-white text-xs font-bold w-12 text-center select-none">
              {Math.round(drawingZoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setDrawingZoom((z) => Math.min(3, +(z + 0.5).toFixed(1)))}
              disabled={drawingZoom >= 3}
              aria-label="Uvećaj"
              className="w-11 h-11 flex items-center justify-center text-white text-xl font-black rounded-full hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              +
            </button>
          </div>

          <div
            className="w-full h-full overflow-auto flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/tehnicki-crtez-modularna-celicna-podkonstrukcija-1000x1000.jpg"
              alt="Tehnički crtež - Modularna čelična podkonstrukcija 1000x1000mm (uvećano)"
              className="max-w-none transition-transform duration-200 ease-out"
              style={{
                width: `${drawingZoom * 100}%`,
                maxWidth: drawingZoom === 1 ? "100%" : "none",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
