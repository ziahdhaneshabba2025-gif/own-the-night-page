import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/sarkar-noir-hero.webp";
import storyImg from "@/assets/sarkar-noir-story.webp";
import productImg from "@/assets/sarkar-noir-product.webp";

const TITLE = "Sarkar Noir | Sarkar Perfume";
const DESCRIPTION =
  "Discover Sarkar Noir by Sarkar Perfume — a bold and sophisticated fragrance with bergamot, saffron, oud, amber and vanilla. Own the night.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Sarkar Noir",
          brand: { "@type": "Brand", name: "Sarkar Perfume" },
          description: DESCRIPTION,
          category: "Eau de Parfum",
          offers: {
            "@type": "Offer",
            price: "1499",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const notes = [
  {
    label: "Top Notes",
    numeral: "I",
    items: ["Bergamot", "Saffron", "Black Pepper"],
    line: "The opening — bright citrus cut with warm spice.",
  },
  {
    label: "Heart Notes",
    numeral: "II",
    items: ["Rose", "Lavender", "Leather"],
    line: "The turn — florals wrapped in smooth leather.",
  },
  {
    label: "Base Notes",
    numeral: "III",
    items: ["Oud", "Amber", "Vanilla", "Musk"],
    line: "The finish — deep, resinous, unmistakably you.",
  },
];

const benefits = [
  { title: "Long-lasting impression", copy: "8–10 hours of projection from a single spray." },
  { title: "Sophisticated evening fragrance", copy: "Built for dinners, weddings and late hours." },
  { title: "Bold signature scent", copy: "Distinct enough to be remembered as yours." },
];

const reasons = [
  { title: "Bold character", copy: "Spice-forward opening that announces itself without shouting." },
  { title: "Luxurious scent profile", copy: "Oud, amber and saffron composed at extrait-level richness." },
  { title: "Versatile evening wear", copy: "From a rooftop dinner to a black-tie celebration." },
  { title: "Memorable dry-down", copy: "Vanilla and musk that linger on skin and fabric." },
];

function GoldButton({ children, href = "#product" }: { children: string; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center bg-gold px-8 text-xs font-medium tracking-luxe text-primary-foreground uppercase transition-opacity duration-300 hover:opacity-85 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
    >
      {children}
    </a>
  );
}

function GhostButton({ children, href }: { children: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center border border-border px-8 text-xs font-medium tracking-luxe text-foreground uppercase transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="border-b border-border">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <a
            href="#top"
            className="font-display text-sm tracking-luxe text-gold uppercase sm:text-base"
          >
            Sarkar
          </a>
          <div className="flex items-center gap-6 text-[0.68rem] tracking-luxe text-muted-foreground uppercase">
            <a href="#notes" className="hidden transition-colors hover:text-gold sm:inline">
              Notes
            </a>
            <a href="#product" className="transition-colors hover:text-gold">
              Shop
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="order-2 lg:order-1">
            <p className="text-[0.7rem] tracking-luxe text-gold uppercase">Sarkar Perfume</p>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
              Sarkar
              <span className="block text-gold-soft italic">Noir</span>
            </h1>
            <p className="mt-5 font-display text-2xl text-foreground/90 sm:text-3xl">
              Own the Night.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              A bold, sophisticated extrait built for evenings that matter — bergamot and saffron
              opening into leather, rose and a long, warm trail of oud.
            </p>
            <p className="mt-7 font-display text-3xl text-foreground">
              ₹1,499
              <span className="ml-3 align-middle text-xs tracking-luxe text-muted-foreground uppercase">
                100 ml
              </span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GoldButton>Shop Now</GoldButton>
              <GhostButton href="#story">Discover the Scent</GhostButton>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={heroImg}
              alt="Sarkar Noir eau de parfum: glossy black chess-king shaped bottle beside its black and gold cylindrical box"
              width={1024}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="mx-auto h-auto w-full max-w-md"
            />
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="rule-gold" />
        </div>

        {/* STORY */}
        <section id="story" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="reveal grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <img
              src={storyImg}
              alt="Sarkar Noir bottle resting on ivory silk with dried rose petals, saffron threads and a piece of oud wood"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="h-auto w-full"
            />
            <div>
              <p className="text-[0.7rem] tracking-luxe text-gold uppercase">The Inspiration</p>
              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Made for the ones who arrive last and are remembered first.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Sarkar Noir is created for those who walk into a room and leave an impression.
                Opening with fresh bergamot and spicy saffron, the fragrance develops into a rich
                heart of leather and rose before settling into a warm, sensual base of oud, amber,
                vanilla and musk.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Composed in the Sarkar tradition — the crown, the weight of the bottle, the restraint
                of the black glass — Noir is the house at its most nocturnal.
              </p>
            </div>
          </div>
        </section>

        {/* NOTES */}
        <section id="notes" className="bg-secondary/40 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <header className="reveal max-w-xl">
              <p className="text-[0.7rem] tracking-luxe text-gold uppercase">Composition</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
                The Fragrance Notes
              </h2>
            </header>
            <ul className="reveal mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {notes.map((note) => (
                <li
                  key={note.label}
                  className="group border border-border bg-card p-7 transition-colors duration-300 hover:border-gold sm:p-8"
                >
                  <span className="font-display text-2xl text-gold/70 transition-colors duration-300 group-hover:text-gold">
                    {note.numeral}
                  </span>
                  <h3 className="mt-4 text-xs tracking-luxe text-foreground uppercase">
                    {note.label}
                  </h3>
                  <p className="mt-4 font-display text-2xl leading-snug text-foreground sm:text-3xl">
                    {note.items.join(" · ")}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">{note.line}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] tracking-luxe text-gold uppercase">The Experience</p>
            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Fresh at first. Dark at heart.
              <span className="block text-gold-soft italic">Unforgettable in the finish.</span>
            </h2>
          </div>
          <dl className="reveal mt-12 grid gap-8 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="border-t border-border pt-5">
                <dt className="text-xs tracking-luxe text-gold uppercase">{b.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.copy}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* PRODUCT */}
        <section id="product" className="bg-ivory text-ivory-foreground">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
            <img
              src={productImg}
              alt="Sarkar Noir 100 ml eau de parfum bottle and gift tube on an ivory background"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full max-w-md"
            />
            <div>
              <p className="text-[0.7rem] tracking-luxe uppercase opacity-60">Sarkar Perfume</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">Sarkar Noir</h2>
              <p className="mt-3 text-xs tracking-luxe uppercase opacity-70">
                Eau de Parfum · Oriental Woody · 100 ml
              </p>
              <p className="mt-6 max-w-md text-sm leading-relaxed opacity-80 sm:text-base">
                A spiced citrus opening, a leather-and-rose heart and a base of oud, amber, vanilla
                and musk. Sprayed once in the evening, it stays until the night ends.
              </p>
              <p className="mt-7 font-display text-3xl">₹1,499</p>
              <div className="mt-8">
                <a
                  href="#final"
                  className="inline-flex min-h-12 items-center justify-center bg-ivory-foreground px-8 text-xs font-medium tracking-luxe text-ivory uppercase transition-opacity duration-300 hover:opacity-85"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl">Why Sarkar Noir?</h2>
          <dl className="reveal mt-10 divide-y divide-border border-y border-border">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="grid gap-2 py-6 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-8"
              >
                <dt className="text-xs tracking-luxe text-gold uppercase">{r.title}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {r.copy}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* FINAL CTA */}
        <section id="final" className="border-t border-border px-5 py-20 text-center sm:px-8 lg:py-28">
          <div className="reveal mx-auto max-w-2xl">
            <p className="text-[0.7rem] tracking-luxe text-gold uppercase">Sarkar Noir · ₹1,499</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Make Your Presence
              <span className="block text-gold-soft italic">Unforgettable.</span>
            </h2>
            <div className="mt-9 flex justify-center">
              <GoldButton href="#product">Shop Sarkar Noir</GoldButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8">
          <div>
            <p className="font-display text-lg tracking-luxe text-gold uppercase">Sarkar</p>
            <p className="mt-3 text-sm text-muted-foreground">Perfume, worn like a crown.</p>
          </div>
          <nav aria-label="Quick links">
            <h2 className="text-xs tracking-luxe text-foreground uppercase">Quick Links</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#top" className="transition-colors hover:text-gold">
                  Home
                </a>
              </li>
              <li>
                <a href="#notes" className="transition-colors hover:text-gold">
                  Fragrance Notes
                </a>
              </li>
              <li>
                <a href="#product" className="transition-colors hover:text-gold">
                  Shop
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h2 className="text-xs tracking-luxe text-foreground uppercase">Follow</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#top" className="transition-colors hover:text-gold">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#top" className="transition-colors hover:text-gold">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#top" className="transition-colors hover:text-gold">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
          <p className="border-t border-border pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sarkar Perfume. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
