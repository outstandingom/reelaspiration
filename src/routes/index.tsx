import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Camera, Film, Video, Image as ImageIcon, Sparkles, Lightbulb,
  Star, Users, Trophy, Award, Briefcase, MapPin, Phone, Mail,
  MessageCircle, ChevronDown, Play, Quote, ArrowRight, CheckCircle2,
  GraduationCap, Aperture, Clapperboard,
} from "lucide-react";

import heroAsset from "@/assets/hero-bg.jpg.asset.json";
import founderAsset from "@/assets/founder-podcast.jpg.asset.json";
import logoAsset from "@/assets/logo-dj.png.asset.json";
import studentsBatch from "@/assets/students-batch.jpg.asset.json";
import certCeremony from "@/assets/certificate-ceremony.jpg.asset.json";
import speakingVipsar from "@/assets/speaking-vipsar.jpg.asset.json";
import speakingPodium from "@/assets/speaking-podium.jpg.asset.json";
import felicitation from "@/assets/felicitation.jpg.asset.json";
import showreel1 from "@/assets/showreel-1.mp4.asset.json";
import showreel2 from "@/assets/showreel-2.mp4.asset.json";

const heroImg = heroAsset.url;
const founderImg = founderAsset.url;
const logoImg = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dinesh Jagwani Cinematography Academy Indore | Best Film & Photography Institute" },
      { name: "description", content: "Best Cinematography Academy in Indore. Learn Photography, Filmmaking, Video Editing, Camera Handling & Content Creation with real shoots, industry mentorship and placement support." },
      { property: "og:title", content: "Dinesh Jagwani Cinematography Academy Indore" },
      { property: "og:description", content: "Premier cinematography & filmmaking institute in Indore offering hands-on training, real-world projects and career guidance." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const WHATSAPP = "https://wa.me/919826019972?text=Hi%20Dinesh%20Jagwani%20Academy%2C%20I%20want%20course%20details";
const PHONE = "tel:+91982601997";
const ADDRESS = "209-C, Surya Dev Nagar, Indore, Madhya Pradesh 452010";

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Courses />
      <WhyUs />
      <Counters />
      <Showreel />
      <Recognition />
      <Gallery />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"], ["Courses", "#courses"], ["Why Us", "#why"],
    ["Gallery", "#gallery"], ["Reviews", "#reviews"], ["Blog", "#blog"], ["Contact", "#contact"],
  ] as const;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoImg} alt="Dinesh Jagwani Cinematography" width={44} height={44}
            className="h-11 w-11 object-contain invert" />
          <div className="leading-tight">
            <div className="font-display text-base text-foreground">Dinesh Jagwani</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-gold">Cinematography Academy</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-muted-foreground transition hover:text-gold">{l}</a>
          ))}
          <a href="#contact" className="rounded-md bg-gradient-gold px-4 py-2 text-sm font-medium text-primary-foreground shadow-gold transition hover:opacity-90">Enroll Now</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="menu">
          <div className="space-y-1.5"><span className="block h-0.5 w-6 bg-foreground" /><span className="block h-0.5 w-6 bg-foreground" /><span className="block h-0.5 w-4 bg-gold" /></div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-border px-5 py-4">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-gold">{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-3 inline-block rounded-md bg-gradient-gold px-4 py-2 text-sm font-medium text-primary-foreground">Enroll Now</a>
        </div>
      )}
    </header>
  );
}

/* ========== UPDATED HERO ========== */
function Hero() {
  // Your external image URL
  const heroImage = "https://i.ibb.co/QjmV1sq0/Whats-App-Image-2026-07-13-at-4-24-44-PM.jpg";

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden">
      {/* Ambient backdrop – blurred version of your external image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImage}
          alt="/lumix.jpeg"
          aria-hidden
          className="h-full w-full object-cover object-center scale-110 blur-2xl opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,oklch(0.82_0.15_84_/_0.18),transparent_60%)]" />
      </div>

      {/* Main grid – left: text (bottom‑left), right: hero image (larger) */}
      <div className="mx-auto grid min-h-screen max-w-7xl items-end gap-12 px-5 pt-28 pb-20 lg:grid-cols-2 lg:pt-32">
        {/* Left column – text content, bottom‑left aligned */}
        <div className="animate-fade-up flex h-full flex-col justify-end text-left">
          <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Indore's Premier Film Academy
          </div>
          <h1 className="text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Master <span className="gradient-gold-text">Cinematography</span> & Filmmaking Like a Professional
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Learn directly from <span className="text-foreground">Dinesh Jagwani</span> — official <span className="text-gold">Panasonic LUMIX mentor</span> with <span className="text-foreground">30+ years</span> of professional cinema, wedding and commercial filmmaking experience.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-gold transition hover:opacity-90">
              Enroll Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-card/30 px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-card/60">
              <Phone className="h-4 w-4 text-gold" /> Contact Us
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-muted-foreground">
            <Stat n="1500+" l="Students Trained" />
            <Stat n="30+" l="Years Experience" />
            <Stat n="LUMIX" l="Official Mentor" />
          </div>

          {/* ✨ “Read More” – bottom‑left, Forte font */}
          <div className="mt-10">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-[#FFF314] text-base sm:text-lg md:text-xl font-forte transition-all duration-300 hover:underline underline-offset-4"
            >
              Read More
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right column – hero image (now uses object‑cover and fills the container) */}
        <div className="relative animate-fade-up lg:justify-self-end w-full h-full min-h-[400px] lg:min-h-[600px]">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-gold opacity-25 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card/40 shadow-cinema w-full h-full">
            <img
              src="src/assets/lumix.jpeg"
              alt="Dinesh Jagwani at the Panasonic LUMIX podcast studio"
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 rounded-md bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur">
              LUMIX Studio · Mentor Session
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/70 hover:text-gold" aria-label="scroll down">
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
/* ----- end Hero ----- */

function Stat({ n, l }: { n: string; l: string }) {
  return <div><div className="font-display text-2xl text-gold">{n}</div><div className="uppercase tracking-widest">{l}</div></div>;
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <SectionLabel kicker="The Academy" title={<>A Studio Built for <span className="gradient-gold-text">Storytellers</span></>} />
      <div className="mx-auto mt-16 grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-gold opacity-20 blur-2xl" />
          <img src={founderImg} alt="Dinesh Jagwani — Founder & Mentor" loading="lazy" width={800} height={1024}
            className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-cinema gold-border" />
          <div className="absolute -bottom-5 left-5 right-5 glass rounded-xl border border-border p-4">
            <div className="text-xs uppercase tracking-widest text-gold">Founder & Mentor</div>
            <div className="font-display text-xl">Dinesh Jagwani</div>
            <div className="text-xs text-muted-foreground">Cinematographer • Director • Educator</div>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Dinesh Jagwani Cinematography Academy is Indore's most trusted destination for aspiring filmmakers, photographers and content creators. We blend classroom theory with on-set practice so every student graduates with a real portfolio — not just a certificate.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Pillar icon={<Award className="h-5 w-5" />} title="Our Mission" desc="Equip creators with cinema-grade craft, vision and confidence to lead the next wave of Indian storytelling." />
            <Pillar icon={<Lightbulb className="h-5 w-5" />} title="Our Vision" desc="Become Central India's premier launchpad for cinematographers, photographers and digital filmmakers." />
            <Pillar icon={<Briefcase className="h-5 w-5" />} title="Industry Pedigree" desc="30+ years across weddings, brand films, documentaries, music videos and ad commercials — and official Panasonic LUMIX mentor." />
            <Pillar icon={<GraduationCap className="h-5 w-5" />} title="Mentor-Led" desc="Small batches, personal mentorship and live critique on every assignment." />
          </div>
        </div>
      </div>
    </section>
  );
}
function Pillar({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-5 hover-lift">
      <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-lg bg-gradient-gold text-primary-foreground">{icon}</div>
      <div className="font-display text-lg">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

/* ---------- COURSES ---------- */
function Courses() {
  const items = [
    { icon: <Film className="h-6 w-6" />, name: "Cinematography Course", desc: "Composition, lensing, lighting and storytelling — from theory to on-set execution.", weeks: "12 Weeks" },
    { icon: <Camera className="h-6 w-6" />, name: "Photography Course", desc: "Master exposure, portraits, weddings and commercial photography end-to-end.", weeks: "10 Weeks" },
    { icon: <Clapperboard className="h-6 w-6" />, name: "Filmmaking Course", desc: "Direction, screenplay, production design and post — make a real short film.", weeks: "16 Weeks" },
    { icon: <Video className="h-6 w-6" />, name: "Video Editing Course", desc: "Premiere Pro, DaVinci Resolve, color grading, motion and sound design.", weeks: "8 Weeks" },
    { icon: <Sparkles className="h-6 w-6" />, name: "Content Creator Course", desc: "Reels, YouTube, brand collaborations and personal-brand storytelling.", weeks: "6 Weeks" },
    { icon: <Aperture className="h-6 w-6" />, name: "Camera Handling & Lighting", desc: "Hands-on with cinema cameras, gimbals, sliders and pro lighting setups.", weeks: "4 Weeks" },
  ];
  return (
    <section id="courses" className="relative bg-gradient-to-b from-background via-card/30 to-background py-24 sm:py-32">
      <SectionLabel kicker="Courses" title={<>Programs Crafted for the <span className="gradient-gold-text">Real Industry</span></>} />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => (
          <article key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 hover-lift">
            <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">{c.icon}</div>
            <h3 className="font-display text-xl">{c.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs">
              <span className="uppercase tracking-widest text-gold">{c.weeks}</span>
              <a href="#contact" className="inline-flex items-center gap-1 text-foreground hover:text-gold">Enquire <ArrowRight className="h-3.5 w-3.5" /></a>
            </div>
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-opacity group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    ["Practical Training", "70% on-set, 30% classroom — learn by doing."],
    ["Real Shoot Experience", "Live wedding, brand and short-film assignments."],
    ["Industry-Standard Gear", "Sony FX, BMPCC, Lumix S5II, gimbals, lights."],
    ["Portfolio Development", "Graduate with a reel that gets you hired."],
    ["Career Guidance", "Resume, pitch, freelance and studio placements."],
    ["Internships & Projects", "Paid projects with our partner studios."],
  ];
  return (
    <section id="why" className="py-24 sm:py-32">
      <SectionLabel kicker="Why Choose Us" title={<>Built to Make You <span className="gradient-gold-text">Industry-Ready</span></>} />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([t, d]) => (
          <div key={t} className="flex gap-4 rounded-xl border border-border bg-card/30 p-6 hover-lift">
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
            <div>
              <div className="font-display text-lg">{t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- COUNTERS ---------- */
function Counters() {
  const stats = [
    { n: 1500, s: "+", l: "Students Trained", icon: <Users className="h-5 w-5" /> },
    { n: 850, s: "+", l: "Projects Completed", icon: <Film className="h-5 w-5" /> },
    { n: 120, s: "+", l: "Workshops Conducted", icon: <GraduationCap className="h-5 w-5" /> },
    { n: 50, s: "+", l: "Industry Collaborations", icon: <Trophy className="h-5 w-5" /> },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/40 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.82_0.15_84_/_0.08),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => <Counter key={i} {...s} />)}
      </div>
    </section>
  );
}
function Counter({ n, s, l, icon }: { n: number; s: string; l: string; icon: React.ReactNode }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setV(Math.floor(n * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [n]);
  return (
    <div ref={ref} className="text-center">
      <div className="mx-auto mb-3 inline-grid h-11 w-11 place-items-center rounded-lg bg-gradient-gold text-primary-foreground">{icon}</div>
      <div className="font-display text-4xl text-foreground sm:text-5xl">{v}<span className="text-gold">{s}</span></div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
    </div>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  return GalleryImpl();
}

/* ---------- SHOWREEL ---------- */
function Showreel() {
  const videos = [
    { src: showreel1.url, title: "Cinematic Showreel · Vol. 01", tag: "Live Shoot" },
    { src: showreel2.url, title: "Behind The Lens · Vol. 02", tag: "On Set" },
  ];
  return (
    <section id="showreel" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,oklch(0.82_0.15_84_/_0.08),transparent_60%)]" />
      <SectionLabel kicker="Showreel" title={<>The Craft <span className="gradient-gold-text">In Motion</span></>} />
      <p className="mx-auto mt-5 max-w-2xl px-5 text-center text-sm text-muted-foreground">
        Real frames from real sets. A glimpse into the cinematic language we teach — lighting, motion, story and emotion.
      </p>
      <div className="mx-auto mt-14 grid max-w-7xl gap-8 px-5 lg:grid-cols-2">
        {videos.map((v, i) => (
          <figure key={i} className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-card/40 shadow-cinema">
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-gold opacity-20 blur-2xl" />
            <video
              src={v.src}
              className="aspect-video w-full bg-black object-cover"
              controls
              playsInline
              preload="metadata"
              poster={heroImg}
            />
            <figcaption className="flex items-center justify-between border-t border-border bg-background/60 px-5 py-4 backdrop-blur">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{v.tag}</div>
                <div className="font-display text-lg">{v.title}</div>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-primary-foreground">
                <Play className="h-4 w-4" />
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- RECOGNITION ---------- */
function Recognition() {
  const cards = [
    { src: felicitation.url, tag: "Felicitation", title: "Honoured by Industry & Community Leaders", desc: "Recognised for 30+ years of contribution to cinematography and photography education." },
    { src: speakingPodium.url, tag: "Keynote Speaker", title: "Speaking at VIPSAR · Drone Awareness Program", desc: "Invited as guest speaker on the future of aerial cinematography and visual storytelling." },
    { src: certCeremony.url, tag: "Graduating Batch", title: "Certified Cinematographers, Launched Careers", desc: "Every batch graduates with a real portfolio and an academy-issued certificate of completion." },
    { src: studentsBatch.url, tag: "Mentor Circle", title: "A Studio Family, Not Just a Classroom", desc: "Small batches, deep mentorship — students stay connected long after graduation." },
  ];
  return (
    <section id="recognition" className="bg-gradient-to-b from-background via-card/30 to-background py-24 sm:py-32">
      <SectionLabel kicker="Recognition & Impact" title={<>Trusted Across the <span className="gradient-gold-text">Industry</span></>} />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-5 md:grid-cols-2">
        {cards.map((c, i) => (
          <article key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 hover-lift">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={c.src} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-gold/40 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold backdrop-blur">
                {c.tag}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GalleryImpl() {
  const imgs = [
    { src: studentsBatch.url, alt: "Cinematography Academy students batch with Dinesh Jagwani", cls: "col-span-2 row-span-2" },
    { src: certCeremony.url, alt: "Student certification ceremony at the academy" },
    { src: speakingPodium.url, alt: "Dinesh Jagwani delivering keynote on filmmaking" },
    { src: felicitation.url, alt: "Dinesh Jagwani being felicitated by industry leaders", cls: "col-span-2" },
    { src: speakingVipsar.url, alt: "Drone awareness program seminar audience" },
  ];
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <SectionLabel kicker="Student Work" title={<>Frames from Our <span className="gradient-gold-text">Studio Floor</span></>} />
      <div className="mx-auto mt-16 grid max-w-7xl auto-rows-[180px] grid-cols-2 gap-3 px-5 sm:grid-cols-3 sm:auto-rows-[220px] lg:grid-cols-4">
        {imgs.map((g, i) => (
          <figure key={i} className={`group relative overflow-hidden rounded-xl gold-border ${g.cls ?? ""}`}>
            <img src={g.src} alt={g.alt} loading="lazy" width={1024} height={1024}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-3 left-3 right-3 translate-y-2 text-xs text-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              <span className="rounded bg-gold px-2 py-0.5 text-[10px] uppercase tracking-widest text-primary-foreground">Student Project</span>
            </div>
          </figure>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-gold/40 px-5 py-3 text-sm hover:bg-card/60">
          <Play className="h-4 w-4 text-gold" /> Watch Showreel
        </a>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const reviews = [
    { n: "Priya Sharma", r: "Cinematography Graduate", q: "The mentorship is unreal. I shot my first paid wedding within 2 months of joining and now run my own studio.", s: 5 },
    { n: "Rahul Verma", r: "Filmmaking Student", q: "Real on-set days changed everything. The portfolio I built here landed me an assistant DP role.", s: 5 },
    { n: "Ananya Patel", r: "Photography Alumni", q: "Best photography academy in Indore — hands down. The lighting and posing workshops are world-class.", s: 5 },
    { n: "Vikram Singh", r: "Video Editing Pro", q: "Color grading classes alone were worth the entire fee. Now I freelance for ad agencies across India.", s: 5 },
  ];
  return (
    <section id="reviews" className="bg-gradient-to-b from-background via-card/30 to-background py-24 sm:py-32">
      <SectionLabel kicker="Testimonials" title={<>Stories from Our <span className="gradient-gold-text">Alumni</span></>} />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-5 md:grid-cols-2">
        {reviews.map((r, i) => (
          <article key={i} className="relative rounded-2xl border border-border bg-card/60 p-7 hover-lift">
            <Quote className="absolute right-5 top-5 h-8 w-8 text-gold/30" />
            <div className="mb-3 flex gap-0.5">{Array.from({ length: r.s }).map((_, k) => <Star key={k} className="h-4 w-4 fill-gold text-gold" />)}</div>
            <p className="text-base leading-relaxed text-foreground">"{r.q}"</p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold font-semibold text-primary-foreground">{r.n[0]}</div>
              <div>
                <div className="text-sm font-medium">{r.n}</div>
                <div className="text-xs text-muted-foreground">{r.r}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">⭐ Rated 4.9/5 across Google Reviews · 200+ verified reviews</p>
    </section>
  );
}

/* ---------- BLOG ---------- */
function Blog() {
  const posts = [
    { t: "How to Become a Cinematographer in India (2026 Roadmap)", e: "A step-by-step guide to launching a career as a cinematographer — gear, mentorship, portfolio and first paid gig.", tag: "Career" },
    { t: "Best Photography Course in Indore: What to Look For", e: "Choosing the right academy matters. Here's the checklist serious photographers should use before enrolling.", tag: "Guide" },
    { t: "Top 7 Filmmaking Mistakes Every Beginner Makes", e: "From flat lighting to weak coverage — fix these early and your reel will instantly look more cinematic.", tag: "Craft" },
  ];
  return (
    <section id="blog" className="py-24 sm:py-32">
      <SectionLabel kicker="Blog" title={<>Insights from the <span className="gradient-gold-text">Cinema Desk</span></>} />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-5 md:grid-cols-3">
        {posts.map((p, i) => (
          <article key={i} className="group rounded-2xl border border-border bg-card/40 p-6 hover-lift">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 px-3 py-1 text-[10px] uppercase tracking-widest text-gold">{p.tag}</div>
            <h3 className="font-display text-xl leading-snug text-foreground group-hover:text-gold transition">{p.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.e}</p>
            <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-gold">Read article <ArrowRight className="h-3.5 w-3.5" /></div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    ["Do I need a camera to enroll?", "No. We provide industry-standard cameras and lighting for all hands-on training. Bringing your own gear is welcome."],
    ["Are the courses beginner-friendly?", "Absolutely. Every course starts from fundamentals and progresses to advanced industry techniques."],
    ["Will I get a certificate?", "Yes — every graduate receives a recognised Dinesh Jagwani Academy completion certificate."],
    ["Do you offer placement support?", "We offer career guidance, internships with partner studios and ongoing project opportunities."],
    ["What are the batch timings?", "Weekday and weekend batches available. Book a free consultation to plan your schedule."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-card/30 py-24 sm:py-32">
      <SectionLabel kicker="FAQ" title={<>Questions, <span className="gradient-gold-text">Answered</span></>} />
      <div className="mx-auto mt-12 max-w-3xl px-5">
        {items.map(([q, a], i) => (
          <div key={i} className="border-b border-border">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left">
              <span className="font-display text-lg">{q}</span>
              <ChevronDown className={`h-5 w-5 text-gold transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid overflow-hidden text-sm text-muted-foreground transition-all ${open === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
              <div className="min-h-0">{a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 sm:py-32">
      <SectionLabel kicker="Contact" title={<>Begin Your <span className="gradient-gold-text">Film Journey</span></>} />
      <div className="mx-auto mt-16 grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-muted-foreground">Book a free consultation, visit our studio in Indore, or message us on WhatsApp — we'll help you choose the right program.</p>
          <div className="grid gap-3">
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Studio Address" value={ADDRESS} />
            <ContactRow icon={<Phone className="h-4 w-4" />} label="Call Us" value="+91 98260 19972" href={PHONE} />
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="hello@dineshjagwani.academy" href="mailto:hello@dineshjagwani.academy" />
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[oklch(0.7_0.18_150)] px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={PHONE} className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-3 text-sm font-medium text-primary-foreground shadow-gold hover:opacity-90">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
          <div className="overflow-hidden rounded-xl gold-border">
            <iframe
              title="Indore Studio Map"
              src="https://www.google.com/maps?q=209-C%2C%20Surya%20Dev%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl border border-border bg-card/60 p-7 shadow-cinema">
          <h3 className="font-display text-2xl">Inquiry Form</h3>
          <p className="mt-1 text-sm text-muted-foreground">Tell us a bit about you and we'll reach out within 24 hours.</p>
          <div className="mt-6 grid gap-4">
            <Field label="Full Name" name="name" required />
            <Field label="Phone Number" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" />
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Course Interest</label>
              <select required className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-gold">
                <option>Cinematography Course</option><option>Photography Course</option>
                <option>Filmmaking Course</option><option>Video Editing Course</option>
                <option>Content Creator Course</option><option>Camera Handling & Lighting</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea rows={3} className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-gold" />
            </div>
            <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-5 py-3 text-sm font-medium text-primary-foreground shadow-gold hover:opacity-90">
              {sent ? "Thank you! We'll be in touch." : <>Send Inquiry <ArrowRight className="h-4 w-4" /></>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
function Field({ label, ...p }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input {...p} className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-gold" />
    </div>
  );
}
function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Body = (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-card/40 p-4 hover:border-gold/40 transition">
      <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-md bg-gradient-gold text-primary-foreground">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-gold">{label}</div>
        <div className="text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Body}</a> : Body;
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="" width={40} height={40} className="h-10 w-10 object-contain invert" />
              <div className="font-display text-lg">Dinesh Jagwani Cinematography Academy</div>
            </div>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">Indore's premier film and photography academy. Master the craft, build a portfolio, launch your career.</p>
          </div>
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Dinesh Jagwani Academy · Indore, India</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating WhatsApp ---------- */
function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp us"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.7_0.18_150)] text-primary-foreground shadow-cinema transition hover:scale-110">
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full bg-gold" />
    </a>
  );
}

/* ---------- Section label ---------- */
function SectionLabel({ kicker, title }: { kicker: string; title: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-5 text-center">
      <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
        <span className="h-px w-8 bg-gold/60" /> {kicker} <span className="h-px w-8 bg-gold/60" />
      </div>
      <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
    </div>
  );
}
