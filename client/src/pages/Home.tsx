// ==========================================
// SCRIPT_CONTENT: Potpuno ujednačeni podaci za Modularni Sistemi
// ==========================================

export const SCRIPT_CONTENT = {
  navbar: {
    brandName: "ČELIK",
    btnCalculator: "IZRAČUNAJ CENU ZA 30 SEKUNDI",
    btnRequest: "KONTAKT",
  },
  hero: {
    title: "Jedan sistem. Bezbroj mogućnosti.",
    subBadge: "SISTEM GOTOVIH FABRIČKI SKLOPLJENIH MONOBLOK PANELA",
    subtitle: "Instalacija za 15 Minuta. Bez Majstora!",
    description:
      "Investirajte jednom. Rešite podlogu zauvek. Prefabrikovani modularni segmenti sa integrisanim sklopivim stopama prilagođeni za sve terene, oblike i namene.",
    cta: "IZRAČUNAJ CENU ZA 30 SEKUNDI",
    heroImgUrl: "/modularni-pod-terasa-exterijer-moderna-4.webp",
  },
  iconsBanner: [
    { label: "MODULARNI SISTEM", desc: "Paneli dimenzija 1x1m koji se bočno spajaju bez ijednog šrafa na licu mesta." },
    { label: "PODEŠAVANJE VISINE", desc: "Teleskopske zglobne stope sa kontra-maticom nivelišu pod u milimetar." },
    { label: "IZDRŽLJIVO I OTPORNO", desc: "Čelična šasija visoke čvrstoće sa donje strane sprečava bilo kakvo ugibanje." },
  ],
  matrix: {
    heading: "Jedna Matrica. Sve Moguće Završne Obloge.",
    subheading: "Izaberite završnu obradu. Sistem ostaje isti.",
    scenarios: [
      {
        id: "SCEN-01",
        slug: "eco-green",
        title: "ECO-GREEN MONOBLOK",
        badge: "Monoblok paneli",
        useCase: "Dvorišta, krovne terase, kafići",
        benefit: "Prirodan izgled trave, uvek zelen i čist, bez blata, košenja i održavanja.",
        variants: [
          { label: "Ambijent", img: "/eco-green-monoblok-vestacka-trava-1.webp" },
          { label: "Konstrukcija", img: "/eco-green-monoblok-vestacka-trava-2.webp" },
          { label: "Detalj", img: "/eco-green-monoblok-vestacka-trava-3.webp" },
        ],
        detail: {
          tagline: "Prirodan izgled trave, uvek zelen i čist — bez blata, košenja, zalivanja i održavanja.",
          blocks: [
            { type: "paragraph", text: "Za sve koji žele svežinu i estetiku travnjaka, ali bez blata, košenja, zalivanja i stalnog održavanja. Idealan za dvorišta, krovne terase, kafiće, dečije zone i prostore oko bazena." },
            { type: "paragraph", text: "Visokokvalitetna veštačka trava integrisana je na perforiranu čeličnu osnovu, omogućavajući trenutno oticanje vode i savršenu stabilnost pod nogama." },
            { type: "divider" },
            { type: "emphasis", lines: ["Uvek zelen.", "Uvek čist.", "Uvek spreman za korišćenje."] },
            { type: "divider" },
            { type: "heading", text: "Ključne prednosti ECO-GREEN panela" },
            { type: "bullets", items: [
              "Prirodan izgled tokom cele godine",
              "Bez blata, košenja i zalivanja",
              "Trenutna drenaža vode",
              "Mekana i prijatna površina za hodanje",
              "Otporan na UV zračenje i habanje",
              "Brza montaža bez pripreme terena",
            ] },
          ],
        },
      },
      {
        id: "SCEN-02",
        slug: "gres-premium",
        title: "GRES-PREMIUM MONOBLOK",
        badge: "Monoblok paneli",
        useCase: "Moderne terase, vile, luksuzni lokali",
        benefit: "Vrhunska estetika keramike, bez lepkova, fuga koje pucaju i nereda.",
        variants: [
          { label: "Ambijent", img: "/gres-premium-monoblok-keramika-1.webp" },
          { label: "Konstrukcija", img: "/gres-premium-monoblok-keramika-2.webp" },
          { label: "Detalj", img: "/gres-premium-monoblok-keramika-3.webp" },
        ],
        detail: {
          tagline: "Vrhunska estetika keramike, bez lepkova, fuga koje pucaju i nereda.",
          blocks: [
            { type: "paragraph", text: "Za one koji žele vrhunsku estetiku velikih keramičkih ploča, ali bez lepkova, fugovanja, prljanja i čekanja da se beton osuši. Savršen izbor za moderne terase, vile, restorane i luksuzne objekte." },
            { type: "paragraph", text: "Granitna keramika debljine 20mm fabrički je montirana na modularnu čeličnu konstrukciju. Rezultat je potpuno ravan, luksuzan pod koji se montira u satima, a ne nedeljama." },
            { type: "divider" },
            { type: "emphasis", lines: ["Izgled luksuznog enterijera.", "Na otvorenom prostoru."] },
            { type: "divider" },
            { type: "heading", text: "Ključne prednosti GRES-PREMIUM panela" },
            { type: "bullets", items: [
              "Vrhunska keramika 20mm",
              "Bez lepkova i fugovanja",
              "Otporan na mraz, so i hemikalije",
              "Lako čišćenje i održavanje",
              "Mogućnost zamene pojedinačne ploče",
              "Savršeno ravna površina",
            ] },
          ],
        },
      },
      {
        id: "SCEN-03",
        slug: "heavy-duty",
        title: "HEAVY-DUTY MONOBLOK",
        badge: "Monoblok paneli",
        useCase: "Radionice, servisi, pranje vozila, industrija",
        benefit: "Ekstremna nosivost, 100% protivklizno, propušta sve tečnosti direktno ispod poda.",
        variants: [
          { label: "Ambijent", img: "/heavy-duty-monoblok-industrijska-resetka-1.webp" },
          { label: "Konstrukcija", img: "/heavy-duty-monoblok-industrijska-resetka-2.webp" },
          { label: "Detalj", img: "/heavy-duty-monoblok-industrijska-resetka-3.webp" },
        ],
        detail: {
          tagline: "Ekstremna nosivost, 100% protivklizno, propušta sve tečnosti direktno ispod poda.",
          blocks: [
            { type: "paragraph", text: "Konstruisan za prostore gde obični podovi brzo propadaju: radionice, servise, perionice, magacine i tehničke platforme. Podnosi visoka tačkasta opterećenja, ulja, hemikalije i konstantnu vlagu." },
            { type: "paragraph", text: "Rešetkasta struktura omogućava trenutni prolaz tečnosti, blata i prljavštine, ostavljajući radnu površinu uvek suvom i bezbednom za kretanje." },
            { type: "divider" },
            { type: "emphasis", lines: ["Industrijska snaga.", "Maksimalna bezbednost na radu."] },
            { type: "divider" },
            { type: "heading", text: "Ključne prednosti HEAVY-DUTY panela" },
            { type: "bullets", items: [
              "Maksimalna nosivost za teška opterećenja",
              "100% protivklizna rešetkasta površina",
              "Trenutno oticanje vode, ulja i tečnosti",
              "Otporan na agresivne hemikalije",
              "Idealan za radionice, servise i perionice",
              "Jednostavno održavanje pranjem pod pritiskom",
            ] },
          ],
        },
      },
      {
        id: "SCEN-04",
        slug: "wpc-compound",
        title: "WPC-COMPOUND MONOBLOK",
        badge: "Monoblok paneli",
        useCase: "Terase, bašte restorana, prostori oko bazena",
        benefit: "Toplina i izgled drveta bez truljenja, farbanja i iverja. Otporan na vlagu i UV zrake.",
        variants: [
          { label: "Ambijent", img: "/wpc-compound-monoblok-drvo-kompozit-1.webp" },
          { label: "Konstrukcija", img: "/wpc-compound-monoblok-drvo-kompozit-2.webp" },
          { label: "Detalj", img: "/wpc-compound-monoblok-drvo-kompozit-3.webp" },
        ],
        detail: {
          tagline: "Toplina i izgled prirodnog drveta, ali bez truljenja, lakiranja, iverja i održavanja.",
          blocks: [
            { type: "paragraph", text: "Za sve koji vole toplinu i izgled drveta, ali ne žele obaveze koje ono nosi. WPC (drvo-polimer kompozit) kombinuje najbolje osobine prirodnog drveta i polimera: lepotu, dugotrajnost i potpunu otpornost na vlagu." },
            { type: "paragraph", text: "Savršen za terase, prostore oko bazena, restoranske bašte i balkone. Ne bledi na suncu, ne truli i prijatan je za hodanje na boso." },
            { type: "divider" },
            { type: "emphasis", lines: ["Toplina drveta.", "Izdržljivost savremenih materijala."] },
            { type: "divider" },
            { type: "heading", text: "Ključne prednosti WPC-COMPOUND panela" },
            { type: "bullets", items: [
              "Izgled i tekstura prirodnog drveta",
              "Nema truljenja, pucanja i iverja",
              "Otporan na vlagu, hlor i UV zrake",
              "Nije potrebno farbanje ni lakiranje",
              "Prijatan za hodanje bez obuće",
              "Dug vek trajanja uz minimalno čišćenje",
            ] },
          ],
        },
      },
    ],
  },
  threeSteps: {
    heading: "Kako funkcioniše montaža?",
    subheading: "Tri koraka do savršenog poda. Bez majstora. Bez alata.",
    steps: [
      {
        num: "01",
        title: "POSTAVITE PANELE",
        desc: "Položite fabrički sklopljene panele na bilo koju podlogu (beton, zemlja, šljunak, travnjak).",
      },
      {
        num: "02",
        title: "KLIK-SPOJITE",
        desc: "Segmenti se bočno uklapaju jedan u drugi u savršenu celinu bez ijednog šrafa.",
      },
      {
        num: "03",
        title: "NIVELIŠITE",
        desc: "Integrisane podesive stope nivelišu neravnine terena od 4 do 12 cm u milimetar.",
      },
    ],
  },
  advantages: {
    heading: "Zašto ČELIK sistem, a ne klasična gradnja?",
    subheading: "Uštedite vreme, novac i živce uz prefabrikovano rešenje.",
    items: [
      {
        title: "Nema majstora i nereda",
        desc: "Zaboravite na mešanje cementa, lepkove, prašinu i majstore koji kasne nedeljama.",
      },
      {
        title: "Trenutna drenaža vode",
        desc: "Pod je podignut od tla — kiša i voda otiču ispod panela, nema bara i vlage.",
      },
      {
        title: "Prenosivo rešenje",
        desc: "Selite se ili menjate raspored? Rasklopite pod za 15 minuta i ponesite ga sa sobom.",
      },
      {
        title: "Za sve vrste terena",
        desc: "Podesive stope rešavaju padove, neravnine i nagibe bez betoniranja podloge.",
      },
    ],
  },
  contactGrid: {
    heading: "Direktan Kontakt i Konsultacije",
    subheading: "Izaberite kanal komunikacije koji vam najviše odgovara. Odgovaramo odmah.",
    cards: [
      {
        label: "WHATSAPP",
        value: "+381 66 241 386",
        href: "https://wa.me/38166241386",
        icon: "whatsapp",
      },
      {
        label: "POZIV",
        value: "+381 66 241 386",
        href: "tel:+38166241386",
        icon: "phone",
      },
      {
        label: "EMAIL",
        value: "modularnipodnisistem@gmail.com",
        href: "mailto:modularnipodnisistem@gmail.com",
        icon: "email",
      },
    ],
  },
  ctaBottom: {
    heading: "Transformišite svoj prostor već ovog vikenda.",
    subheading: "Izračunajte okvirnu cenu za vašu površinu ili nas kontaktirajte za ponudu po meri.",
    btnPrimary: "IZRAČUNAJ CENU ZA 30 SEKUNDI",
    btnSecondary: "POZOVI ODMAH: 066 241 386",
  },
  faq: {
    heading: "Često postavljana pitanja",
    subheading: "Sve što treba da znate o montaži, nosivosti i održavanju.",
    items: [
      {
        id: "faq-01",
        question: "Da li je zaista moguće montirati pod bez ikakvog alata?",
        answer: "Da! Svaki panel dolazi 100% fabrički sklopljen sa integrisanom podkonstrukcijom i završnom oblogom. Paneli se bočno uklapaju jedan u drugi putem fabričkih vođica, dok se nivelacija stopa radi rukom.",
      },
      {
        id: "faq-02",
        question: "Kolika je nosivost podnog sistema?",
        answer: "Standardna čelična šasija je sertifikovana za nosivost do 400 kg/m² ravnomernog opterećenja, dok Heavy-Duty industrijski segmenti podnose i preko 1.000 kg/m².",
      },
      {
        id: "faq-03",
        question: "Mogu li samostalno čistiti prostor ispod panela?",
        answer: "Naravno. Paneli su modularni i svaki segment od 1x1m se može pojedinačno i lako podići u bilo kom trenutku radi detaljnog čišćenja ili revizije slivnika, a zatim jednostavno vratiti na mesto.",
      },
    ],
  },
  footer: { copyright: "© 2026 Modularni Sistemi. Sva prava zadržana." },
};

import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Phone, Mail, MessageSquare, Maximize2, ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";
import { toast } from "sonner";
import { useSEO } from "@/hooks/useSEO";

export const FIRE_PIT_PRODUCT = {
  id: "PROD-FP-01",
  slug: "fire-pit-grill",
  title: "FIRE PIT GRILL",
  badge: "Čelični roštilj i vatrište",
  useCase: "Dvorišta, terase, vikendice, ugostiteljstvo",
  benefit: "Centralno mesto okupljanja na otvorenom. Vrhunski dizajn, masivna čelična konstrukcija i višenamenska upotreba — ložište za vatru i profesionalni roštilj u jednom.",
  variants: [
    { label: "Ambijent", img: "/fire-pit-grill-celicna-vatra-rostilj.webp" },
  ],
  detail: {
    tagline: "Centralno mesto okupljanja na otvorenom — ložište za vatru i profesionalni roštilj u jednom elementu.",
    blocks: [
      { type: "paragraph", text: "FIRE PIT GRILL spaja sirovu snagu industrijskog čelika i toplinu otvorene vatre. Dizajniran kao centralni element svakog dvorišta, terase ili ugostiteljskog prostora, pruža jedinstven doživljaj pripreme hrane i druženja na otvorenom tokom cele godine." },
      { type: "paragraph", text: "On nije samo ložište. Nije samo roštilj. On postaje mesto oko kog se okupljaju porodica, prijatelji i svi oni trenuci koji se dugo pamte." },
      { type: "paragraph", text: "Masivna čelična konstrukcija projektovana je za dug vek trajanja i svakodnevnu upotrebu. Široka grill ploča omogućava pripremu različitih namirnica istovremeno, dok otvorena vatra stvara atmosferu koju nijedan drugi način pripreme hrane ne može da zameni." },
      { type: "divider" },
      { type: "emphasis", lines: ["To nije samo proizvod.", "To je razlog da se ljudi okupe."] },
      { type: "divider" },
      { type: "heading", text: "Zašto FIRE PIT GRILL" },
      { type: "bullets", items: [
        "Ložište i grill u jednom",
        "Masivna čelična konstrukcija",
        "Više temperaturnih zona",
        "Dug vek trajanja",
        "Moderan dizajn",
        "Centralno mesto svakog prostora",
      ] },
    ],
  },
} as const;

function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden hover:shadow-md transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-50 transition"
      >
        <span className="font-bold text-zinc-900 text-base">{question}</span>
        <ChevronDown
          size={20}
          className={`text-blue-900 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200">
          <p className="text-zinc-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

const HERO_SLIDER_IMAGES = [
  "/modularni-pod-terasa-kisa-noc-1.webp",
  "/modularni-pod-terasa-kamene-staze-basta-2.webp",
  "/modularni-pod-terasa-vatra-sumrak-3.webp",
  "/modularni-pod-terasa-exterijer-moderna-4.webp",
];

function HeroSlider({ onCtaClick }: { onCtaClick: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] md:h-screen overflow-hidden">
      {/* Background images — smooth fade only */}
      {HERO_SLIDER_IMAGES.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: idx === activeIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Directional dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Hero content */}
      <div className="absolute inset-x-0 bottom-12 md:bottom-auto md:left-0 md:top-[45%] md:-translate-y-1/2 z-10 px-6 md:px-16 lg:px-24 w-full">
        <div className="max-w-[520px] pt-32 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-black tracking-normal text-white leading-tight mb-4">
            Modularni Podni Sistemi — Jedan Sistem. Bezbroj Mogućnosti.
          </h1>
          <p className="text-base md:text-lg text-white/80 font-medium mb-8">
            Modularni podni sistem
          </p>
          <button
            onClick={onCtaClick}
            className="bg-orange-600 hover:bg-orange-700 text-white font-black text-sm uppercase px-10 py-4 rounded-none shadow-xl transition-colors animate-cta-pulse"
          >
            IZRAČUNAJ CENU ZA 30 SEKUNDI
          </button>
        </div>
      </div>
    </div>
  );
}

function ImageSlider({ variants, productTitle }: { variants: { img: string; label: string }[]; productTitle: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (variants.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % variants.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [variants.length]);

  return (
    <div className="relative w-full aspect-[4/3] bg-neutral-100 overflow-hidden">
      {variants.map((variant, idx) => (
        <img
          key={variant.img}
          src={variant.img}
          alt={`${productTitle} – ${variant.label}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: idx === activeIndex ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-3 left-0 w-full flex items-center justify-center gap-2">
        {variants.map((variant, idx) => (
          <span
            key={variant.img}
            className={`h-1.5 rounded-none transition-all ${
              idx === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          ></span>
        ))}
      </div>
      <div className="absolute bottom-7 left-0 w-full text-center">
        <span className="bg-black/50 text-white text-[11px] font-semibold px-2 py-1">
          {variants[activeIndex].label}
        </span>
      </div>
    </div>
  );
}

export default function CelikMainPage() {
  useSEO({
    title: "Modularni Sistemi - Uradi Sam za 15 Minuta | Modularni Sistemi",
    description:
      "Preuredite enterijer i eksterijer uz modularne sisteme \"uradi sam\". Brza montaža svih elemenata za 15 minuta bez alata. Otkrijte sve opcije na modularnisistemi.com!",
    path: "/",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [selectedSystem, setSelectedSystem] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);
  const [diagramZoom, setDiagramZoom] = useState(1);
  const firePitPreviewRef = useRef<HTMLVideoElement>(null);

  const parsedWidth = parseFloat(width) || 0;
  const parsedLength = parseFloat(length) || 0;
  const totalPanels = Math.ceil(parsedWidth) * Math.ceil(parsedLength);
  const totalArea = (parsedWidth * parsedLength).toFixed(1);

  const selectedSystemData = SCRIPT_CONTENT.matrix.scenarios.find(
    (s) => s.id === selectedSystem
  );

  const handleOpenCalculator = (systemId?: string) => {
    if (systemId) {
      setSelectedSystem(systemId);
    }
    setIsModalOpen(true);
  };

  const handleCalculatorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!width || !length || !selectedSystem || !customerName || !customerPhone || !customerEmail) {
      toast.error("Molimo popunite sva polja");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("ime", customerName);
      formData.append("telefon", customerPhone);
      formData.append("email", customerEmail);
      formData.append("sistem", selectedSystemData?.title || selectedSystem);
      formData.append("sirina", `${parsedWidth} m`);
      formData.append("duzina", `${parsedLength} m`);
      formData.append("kvadratura", `${totalArea} m²`);
      formData.append("broj_panela", `${totalPanels} komada (1x1m)`);
      formData.append("_subject", `Modularni Sistemi – Nova ponuda: ${totalPanels} panela (${selectedSystemData?.title})`);
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      if (uploadedFile) {
        if (uploadedFile.size > 5 * 1024 * 1024) {
          toast.error("Fajl je prevelik. Maksimalna veličina je 5MB.");
          setIsSubmitting(false);
          return;
        }
        formData.append("attachment", uploadedFile);
      }

      const res = await fetch("https://formsubmit.co/modularnipodnisistem@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setConfirmationMessage(`Hvala, ${customerName}! Vaš zahtev za ponudu je uspešno poslat. Kontaktiraćemo vas na ${customerPhone} u najkraćem roku.`);
        toast.success("Zahtev za ponudu je uspešno poslat!");
      } else {
        throw new Error("Greška pri slanju");
      }
    } catch {
      toast.error("Došlo je do greške. Molimo pokušajte ponovo ili nas pozovite.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans antialiased">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 h-16 flex items-center px-4 shadow-sm">
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Modularni Sistemi Logo" style={{ height: "40px", width: "auto" }} />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#proizvodi"
              className="text-zinc-700 hover:text-orange-600 font-semibold text-xs uppercase px-3 py-2 transition-colors"
            >
              Proizvodi
            </a>
            <Link
              href="/saradnja-sa-arhitektama"
              className="text-zinc-700 hover:text-orange-600 font-semibold text-xs uppercase px-3 py-2 transition-colors"
            >
              Saradnja sa arhitektama
            </Link>
            <a
              href="#kontakt"
              className="text-zinc-700 hover:text-orange-600 font-semibold text-xs uppercase px-3 py-2 transition-colors"
            >
              Kontakt
            </a>
            <button
              onClick={() => handleOpenCalculator()}
              className="ml-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-none shadow-sm transition-colors"
            >
              Kalkulator Cene
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleOpenCalculator()}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-[11px] uppercase px-3 py-2 rounded-none transition-colors"
            >
              Kalkulator
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-700 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-zinc-200 py-4 px-6 flex flex-col gap-3 shadow-lg">
            <a
              href="#proizvodi"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 hover:text-orange-600 font-semibold text-sm uppercase py-1"
            >
              Proizvodi
            </a>
            <Link
              href="/saradnja-sa-arhitektama"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 hover:text-orange-600 font-semibold text-sm uppercase py-1"
            >
              Saradnja sa arhitektama
            </Link>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 hover:text-orange-600 font-semibold text-sm uppercase py-1"
            >
              Kontakt
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSlider onCtaClick={() => handleOpenCalculator()} />

      {/* 3 Icons Banner */}
      <section className="bg-white border-y border-zinc-200 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {SCRIPT_CONTENT.iconsBanner.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start">
              <span className="text-orange-600 font-black text-sm uppercase tracking-wider mb-1">
                {item.label}
              </span>
              <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Matrix */}
      <section id="proizvodi" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-normal text-zinc-900 mb-4">
            {SCRIPT_CONTENT.matrix.heading}
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            {SCRIPT_CONTENT.matrix.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SCRIPT_CONTENT.matrix.scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="bg-white border border-zinc-200 rounded-none overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <ImageSlider
                  variants={scenario.variants}
                  productTitle={scenario.title}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase text-blue-900 tracking-wider">
                      {scenario.badge}
                    </span>
                    <span className="text-xs font-bold text-zinc-600 uppercase">
                      {scenario.useCase}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-4 tracking-normal">{scenario.title}</h3>
                  <Link
                    href={`/proizvod/${scenario.slug}`}
                    className="inline-block text-orange-600 hover:text-orange-700 font-bold text-xs uppercase tracking-wide mb-3 transition-colors"
                  >
                    Više o proizvodu &rarr;
                  </Link>
                  <p className="text-zinc-600 text-sm leading-relaxed">{scenario.benefit}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenCalculator(scenario.id)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase px-4 py-3 rounded-none shadow-sm transition-colors"
                >
                  Izračunaj Cenu
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ostali proizvodi */}
      <section className="py-16 px-4 max-w-6xl mx-auto border-t border-zinc-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-normal text-zinc-900 mb-4">
            Ostali proizvodi
          </h2>
          <p className="text-zinc-600 text-base max-w-xl mx-auto">
            Proširite svoj prostor na otvorenom uz naše dodatne proizvode od čelika
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: FIRE PIT GRILL */}
          <div className="bg-white border border-zinc-200 rounded-none overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div
                className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden cursor-pointer group"
                onClick={() => setIsVideoOpen(true)}
              >
                <video
                  ref={firePitPreviewRef}
                  src="/fire-pit-video-preview.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-orange-600/90 group-hover:bg-orange-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[11px] font-semibold px-2.5 py-1">
                  Pogledaj video (0:19)
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase text-blue-900 tracking-wider">
                    Čelični roštilj i vatrište
                  </span>
                  <span className="text-xs font-bold text-zinc-600 uppercase">
                    Dvorišta i terase
                  </span>
                </div>
                <h3 className="text-xl font-black text-zinc-900 mb-4 tracking-normal">FIRE PIT GRILL</h3>
                <Link
                  href="/proizvod/fire-pit-grill"
                  className="inline-block text-orange-600 hover:text-orange-700 font-bold text-xs uppercase tracking-wide mb-3 transition-colors"
                >
                  Više o proizvodu &rarr;
                </Link>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Centralno mesto okupljanja na otvorenom. Vrhunski dizajn, masivna čelična konstrukcija i višenamenska upotreba — ložište za vatru i profesionalni roštilj u jednom.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a
                href="mailto:modularnipodnisistem@gmail.com?subject=Upit%20za%20Fire%20Pit%20Grill&body=Poštovani%2C%0A%0AZanima%20me%20Fire%20Pit%20Grill.%20Molim%20Vas%20pošaljite%20mi%20ponudu%20i%20dodatne%20informacije.%0A%0AHvala."
                className="block text-center w-full bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase px-4 py-3 rounded-none shadow-sm transition-colors"
              >
                Pošalji Upit za Fire Pit
              </a>
            </div>
          </div>

          {/* Card 2: Uskoro */}
          <div className="bg-zinc-100 border border-dashed border-zinc-300 rounded-none overflow-hidden flex flex-col justify-between">
            <div className="relative w-full aspect-[4/3] bg-zinc-200 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-zinc-300 flex items-center justify-center text-zinc-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-xs font-black uppercase text-zinc-500 tracking-wider">
                  U pripremi
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1 items-center justify-center text-center">
              <h3 className="text-lg font-black text-zinc-400 mb-2 tracking-normal uppercase">Uskoro</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Novi modularni elementi u razvoju</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-none overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src="/fire-pit-video.mp4"
              controls
              autoPlay
              className="w-full aspect-video"
            />
          </div>
        </div>
      )}

      {/* 3 Steps */}
      <section className="py-20 px-4 bg-white border-y border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-normal text-zinc-900 mb-12 text-center">
            {SCRIPT_CONTENT.threeSteps.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SCRIPT_CONTENT.threeSteps.steps.map((step) => (
              <div key={step.num} className="bg-zinc-50 border border-zinc-200 p-8 flex flex-col items-start">
                <div className="text-4xl font-black text-orange-600 mb-4 font-mono">
                  {step.num}
                </div>
                <h3 className="text-xl font-black text-zinc-900 mb-3 tracking-normal">{step.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-normal text-zinc-900 mb-12 text-center">
            {SCRIPT_CONTENT.advantages.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCRIPT_CONTENT.advantages.items.map((item, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 p-6 flex flex-col justify-between">
                <div className="w-8 h-1 bg-orange-600 mb-4"></div>
                <h3 className="text-lg font-black text-zinc-900 mb-3 tracking-normal">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2C Dostava sekcija */}
      <section className="py-16 px-4 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-zinc-200 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-black uppercase text-orange-600 tracking-wider">
                  KOMPLETNO REŠENJE NA VAŠOJ ADRESI
                </span>
                <h2 className="text-2xl md:text-3xl font-black tracking-normal text-zinc-900 mt-2 mb-4">
                  Dostava na Paleti. Montaža za Jedno Popodne.
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Svi paneli stižu 100% sklopljeni i spremni za postavljanje. Zapakovani na paleti, stižu na vašu adresu sa svim potrebnim elementima. Nema traženja majstora, nema čekanja, nema građevinskog otpada.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-none bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mt-0.5">✓</div>
                    <p className="text-zinc-700 text-sm">Fabrički sklopljeni segmenti 1x1m sa montiranom podlogom</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-none bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mt-0.5">✓</div>
                    <p className="text-zinc-700 text-sm">Integrisane teleskopske stope za nivelaciju na svakom terenu</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-none bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mt-0.5">✓</div>
                    <p className="text-zinc-700 text-sm">Dostava kurirskom službom direktno na vašu adresu</p>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenCalculator()}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase px-8 py-3.5 rounded-none shadow-sm transition-colors"
                >
                  Izračunaj Potreban Broj Panela
                </button>
              </div>
              <div className="relative">
                <img
                  src="/wpc-monoblok-paneli-paleta-isporuka.webp"
                  alt="WPC modularni pod - ambijentalni prikaz i logistika dostave"
                  className="w-full h-auto object-cover border border-zinc-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drenaža i Ventilacija Dijagram Sekcija */}
      <section className="py-16 px-4 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative group cursor-pointer" onClick={() => { setDiagramZoom(1); setIsDiagramOpen(true); }}>
                <img
                  src="/drenaza-i-ventilacija-modularni-pod-dijagram.webp"
                  alt="Drenaža i ventilacija modularnog poda - tehnički dijagram funkcionalnosti"
                  className="w-full h-auto object-cover border border-zinc-200 shadow-sm"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-zinc-800 text-xs font-bold uppercase tracking-wider px-4 py-2 flex items-center gap-2 shadow-md">
                    <Maximize2 size={16} />
                    Kliknite za uvećanje
                  </div>
                </div>
              </div>
              <div>
                <span className="text-xs font-black uppercase text-blue-900 tracking-wider">
                  FUNKCIONALNOST SISTEMA
                </span>
                <h2 className="text-2xl md:text-3xl font-black tracking-normal text-zinc-900 mt-2 mb-4">
                  Drenaža i Ventilacija Bez Premca
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Podignuta konstrukcija na zglobnim stopama omogućava konstantnu cirkulaciju vazduha i nesmetano oticanje vode ispod poda. Nema zadržavanja vlage, nema plesni, a prostor ispod panela ostaje čist i suv.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border-l-2 border-orange-600 pl-4">
                    <p className="text-xs font-black uppercase text-zinc-900">Oticanje Vode</p>
                    <p className="text-zinc-600 text-xs mt-1">Kiša i tečnosti prolaze kroz drenažne kanale direktno u podlogu ili slivnik.</p>
                  </div>
                  <div className="border-l-2 border-orange-600 pl-4">
                    <p className="text-xs font-black uppercase text-zinc-900">Konstantna Ventilacija</p>
                    <p className="text-zinc-600 text-xs mt-1">Vazduh slobodno struji ispod panela, sprečavajući truljenje i neprijatne mirise.</p>
                  </div>
                  <div className="border-l-2 border-orange-600 pl-4">
                    <p className="text-xs font-black uppercase text-zinc-900">Skrivene Instalacije</p>
                    <p className="text-zinc-600 text-xs mt-1">Prostor ispod poda idealan je za vođenje kablova, creva za zalivanje ili rasvete.</p>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenCalculator()}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase px-8 py-3.5 rounded-none shadow-sm transition-colors"
                >
                  Izračunaj Cenu za Vaš Prostor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dijagram Lightbox Modal */}
      {isDiagramOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <button
              onClick={() => setDiagramZoom(prev => Math.min(prev + 0.25, 2.5))}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-none transition"
              title="Uvećaj"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={() => setDiagramZoom(prev => Math.max(prev - 0.25, 0.5))}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-none transition"
              title="Umanji"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={() => setDiagramZoom(1)}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-none transition"
              title="Resetuj"
            >
              <RotateCcw size={20} />
            </button>
            <button
              onClick={() => { setIsDiagramOpen(false); setDiagramZoom(1); }}
              className="p-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-none transition ml-2"
              title="Zatvori"
            >
              <X size={20} />
            </button>
          </div>
          <div className="overflow-auto max-w-[90vw] max-h-[85vh] flex items-center justify-center">
            <img
              src="/drenaza-i-ventilacija-modularni-pod-dijagram.webp"
              alt="Drenaža i ventilacija modularnog poda - uvećani prikaz"
              style={{ transform: `scale(${diagramZoom})`, transformOrigin: 'center center' }}
              className="transition-transform duration-200 max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* B2B Saradnja Banner */}
      <section className="py-16 px-4 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-black uppercase text-orange-400 tracking-wider">
              ZA ARHITEKTE, PROJEKTANTE I INVESTITORE
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-normal text-white mt-2 mb-3">
              Imate ideju? Mi možemo da je realizujemo.
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
              Obezbeđujemo tehničku dokumentaciju, 3D modele, prilagođavanje dimenzija i mogućnost izrade potpuno novih proizvoda prema vašem projektu.
            </p>
          </div>
          <Link
            href="/saradnja-sa-arhitektama"
            className="whitespace-nowrap bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase px-8 py-4 rounded-none shadow-sm transition-colors text-center"
          >
            Saznajte više o saradnji &rarr;
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-normal text-zinc-900 mb-4">
            {SCRIPT_CONTENT.contactGrid.heading}
          </h2>
          <p className="text-zinc-600 text-lg max-w-xl mx-auto">
            {SCRIPT_CONTENT.contactGrid.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCRIPT_CONTENT.contactGrid.cards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              target={card.icon === "whatsapp" ? "_blank" : undefined}
              rel={card.icon === "whatsapp" ? "noopener noreferrer" : undefined}
              className="bg-white border border-zinc-200 p-8 flex flex-col items-center text-center hover:border-orange-600 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                {card.icon === "whatsapp" && <MessageSquare size={20} />}
                {card.icon === "phone" && <Phone size={20} />}
                {card.icon === "email" && <Mail size={20} />}
              </div>
              <span className="text-xs font-black uppercase text-zinc-400 tracking-wider mb-2">
                {card.label}
              </span>
              <span className="text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                {card.value}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-zinc-100 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-normal text-zinc-900 mb-12 text-center">
            {SCRIPT_CONTENT.faq.heading}
          </h2>
          <div className="space-y-4">
            {SCRIPT_CONTENT.faq.items.map((item) => (
              <FAQAccordion
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-normal text-zinc-900 mb-4">
            {SCRIPT_CONTENT.ctaBottom.heading}
          </h2>
          <p className="text-zinc-600 text-lg mb-8 max-w-xl mx-auto">
            {SCRIPT_CONTENT.ctaBottom.subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenCalculator()}
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-black text-sm uppercase px-8 py-4 rounded-none shadow-md transition-colors"
            >
              {SCRIPT_CONTENT.ctaBottom.btnPrimary}
            </button>
            <a
              href="tel:+38166241386"
              className="w-full sm:w-auto bg-zinc-900 hover:bg-black text-white font-black text-sm uppercase px-8 py-4 rounded-none shadow-md transition-colors text-center"
            >
              {SCRIPT_CONTENT.ctaBottom.btnSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 px-4 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xl font-black tracking-normal text-white">MODULARNI SISTEMI</span>
            <span className="text-xs text-zinc-500">|</span>
            <span className="text-xs text-zinc-400">Fabrički prefabrikovani podni sistemi</span>
          </div>
          <div className="text-xs text-center md:text-right">
            <p className="text-zinc-300 font-bold mb-1">Direktan kontakt: +381 66 241 386</p>
            <p className="text-zinc-400 mb-1">Email: modularnipodnisistem@gmail.com</p>
            <p className="text-zinc-500">{SCRIPT_CONTENT.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Calculator Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-zinc-200 p-8 max-w-lg w-full rounded-none shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-black text-zinc-900 tracking-normal">Brzi Proračun Cene</h2>
              <button
                onClick={() => { setIsModalOpen(false); setFilterCategory(null); }}
                className="text-zinc-400 hover:text-zinc-600 text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>
            <p className="text-zinc-600 text-sm mb-6">
              Izaberite završnu oblogu i unesite dimenzije prostora.
            </p>

            {confirmationMessage ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-black text-zinc-900 mb-2">Zahtev je poslat!</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">{confirmationMessage}</p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setConfirmationMessage("");
                    setWidth("");
                    setLength("");
                    setSelectedSystem("");
                    setFilterCategory(null);
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase px-6 py-3 rounded-none transition-colors"
                >
                  Zatvori
                </button>
              </div>
            ) : (
              <form onSubmit={handleCalculatorSubmit} className="space-y-4">
                {/* Izbor kategorije */}
                <div className="flex gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => {
                      setFilterCategory(filterCategory === "b2c" ? null : "b2c");
                    }}
                    className={`flex-1 text-xs font-bold uppercase py-2 px-3 border transition-colors ${
                      filterCategory === "b2c"
                        ? "bg-blue-900 text-white border-blue-900"
                        : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    Domaćinstvo / Terase
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFilterCategory(filterCategory === "b2b" ? null : "b2b");
                    }}
                    className={`flex-1 text-xs font-bold uppercase py-2 px-3 border transition-colors ${
                      filterCategory === "b2b"
                        ? "bg-blue-900 text-white border-blue-900"
                        : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    Komercijalno / Industrija
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-zinc-700 mb-1">
                    Završna Obloga
                  </label>
                  <select
                    value={selectedSystem}
                    onChange={(e) => setSelectedSystem(e.target.value)}
                    required
                    className="w-full bg-zinc-50 border border-zinc-300 px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:border-orange-600"
                  >
                    <option value="">Izaberite završnu oblogu...</option>
                    {SCRIPT_CONTENT.matrix.scenarios
                      .filter((s) => {
                        if (!filterCategory) return true;
                        if (filterCategory === "b2c") return s.slug === "wpc-compound" || s.slug === "eco-green" || s.slug === "gres-premium";
                        if (filterCategory === "b2b") return s.slug === "heavy-duty" || s.slug === "gres-premium";
                        return true;
                      })
                      .map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-zinc-700 mb-1">
                      Širina (m)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="1"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="npr. 4"
                      required
                      className="w-full bg-zinc-50 border border-zinc-300 px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:border-orange-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-zinc-700 mb-1">
                      Dužina (m)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="1"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="npr. 5"
                      required
                      className="w-full bg-zinc-50 border border-zinc-300 px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:border-orange-600"
                    />
                  </div>
                </div>

                {parsedWidth > 0 && parsedLength > 0 && (
                  <div className="bg-zinc-100 p-4 border border-zinc-200 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Ukupna površina:</span>
                      <span className="font-bold text-zinc-900">{totalArea} m²</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Potreban broj panela (1x1m):</span>
                      <span className="font-bold text-orange-600 font-mono text-sm">{totalPanels} kom</span>
                    </div>
                  </div>
                )}

                <div className="border-t border-zinc-200 pt-3 space-y-3">
                  <p className="text-xs font-black uppercase text-zinc-700">Podaci za dostavu ponude</p>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1">Ime i prezime</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Vaše ime"
                      required
                      className="w-full bg-zinc-50 border border-zinc-300 px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:border-orange-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1">Broj telefona</label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="06X XXX XXXX"
                      required
                      className="w-full bg-zinc-50 border border-zinc-300 px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:border-orange-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1">Email adresa</label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="vas.email@domen.com"
                      required
                      className="w-full bg-zinc-50 border border-zinc-300 px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:border-orange-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1">
                      Skica ili fotografija prostora <span className="text-zinc-400 font-normal">(opciono, max 5MB)</span>
                    </label>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setUploadedFile(file);
                      }}
                      className="w-full text-xs text-zinc-600 file:mr-3 file:py-1.5 file:px-3 file:border-0 file:text-xs file:font-bold file:uppercase file:bg-zinc-200 file:text-zinc-700 hover:file:bg-zinc-300 cursor-pointer"
                    />
                  </div>
                </div>

                {parsedWidth > 0 && parsedLength > 0 && selectedSystem && (
                  <div className="bg-orange-50 border border-orange-200 p-3">
                    <p className="text-xs text-zinc-600">
                      Napomena: Proračun je informativan jer radimo projekte po meri. Finalnu ponudu i broj blokova definisaćemo kroz tehnički crtež.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !width || !length || !selectedSystem || !customerName || !customerPhone || !customerEmail}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-zinc-300 text-white font-black text-sm uppercase px-4 py-3 rounded-none transition-colors"
                >
                  {isSubmitting ? "Slanje..." : "Pošalji Zahtev"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}