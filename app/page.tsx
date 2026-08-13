"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  Clock,
  FileText,
  LineChart,
  LockKeyhole,
  Megaphone,
  MessageCircle,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  Smartphone,
  Cpu
} from "lucide-react";
import MRAgentChat from "@/components/MRAgentChat";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "News", href: "/news" },
  { label: "Admin Assistant", href: "/admin" },
  { label: "Pricing", href: "#pricing" },
  { label: "Proof", href: "#proof" },
];

const heroStats = [
  { label: "Mind Read", value: "1 clear read", icon: Brain },
  { label: "PWA Ready", value: "Install as App", icon: Smartphone },
  { label: "Agentic AI", value: "Autonomous tasks", icon: Cpu },
];

const platformLayers = [
  {
    title: "Real Estate Operations",
    copy: "Automate property listings, market analysis, and client follow-ups with A11 Premium Agent integration.",
    detail: "A11 Command",
    icon: Building2,
  },
  {
    title: "Administrative Intake",
    copy: "Drop your meeting notes, email drafts, or voice memos. The assistant triages the pressure and prepares your next move.",
    detail: "Input",
    icon: MessageCircle,
  },
  {
    title: "Executive Mind Read",
    copy: "The agent identifies hidden risks, posture protection, and the most profitable path forward for your business.",
    detail: "Analysis",
    icon: Radar,
  },
  {
    title: "Action Twin",
    copy: "Receive one synthesis, one recommended action, and a drafted reply that sounds exactly like you—only calmer.",
    detail: "Execution",
    icon: Zap,
  },
  {
    title: "PWA Mobility",
    copy: "Install MindReply on your phone. Access your executive nervous system anywhere, even offline.",
    detail: "Access",
    icon: Smartphone,
  },
];

const workflow = [
  {
    step: "01",
    title: "Sync your pressure",
    copy: "Paste the message or record a voice note. The PWA interface is built for fast, one-handed administrative intake.",
  },
  {
    step: "02",
    title: "Agentic Processing",
    copy: "The AI assistant doesn't just chat; it maps the pressure, checks your playbooks, and prepares real-world actions.",
  },
  {
    step: "03",
    title: "One Composed Move",
    copy: "Get the exact line you need to send or the specific task you need to delegate. No more decision fatigue.",
  },
  {
    step: "04",
    title: "Daily Pulse Reports",
    copy: "Receive 30-minute updates on your business readiness, revenue truth, and pending administrative actions.",
  },
];

const promotionLanes = [
  {
    title: "MRadvertisingTeam",
    copy: "Prepares campaign angles, short posts, launch copy, and platform-specific variants for review before anything is published.",
    icon: Megaphone,
  },
  {
    title: "Promotion queue",
    copy: "Separates drafted, approved, blocked, and sent material so automation never pretends an external account is connected.",
    icon: Workflow,
  },
  {
    title: "Revenue readiness",
    copy: "Keeps subscription, annual pack, and credit-load ideas visible while transaction counts stay tied to a real source.",
    icon: LineChart,
  },
];

const proofItems = [
  "PWA manifest and service worker enabled for mobile-first installation.",
  "Speed Insights and Vercel Analytics mounted for production performance.",
  "Secure intake layer protects sensitive executive communications.",
  "Agentic AI workflows for automated administrative support.",
];

const packageRows = [
  { label: "PWA Platform", value: "Full mobile-ready administrative assistant", icon: CheckCircle2 },
  { label: "Executive AI", value: "Mainstream agentic workflows for founders", icon: Sparkles },
  { label: "Revenue Engine", value: "Monetization-ready subscription infrastructure", icon: Activity },
  { label: "Decision Layer", value: "Private operating twin for high-stakes moves", icon: Bot },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MindReply",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  url: "https://www.mind-reply.com/",
  description: "MindReply is an AI-powered Executive Assistant and Decision Infrastructure Layer for founders and agencies.",
  featureList: ["Administrative AI Assistant", "PWA Support", "Executive Mind Read", "Agentic Workflows", "Revenue Readiness"],
  brand: {
    "@type": "Brand",
    name: "MindReply",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#122033]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="border-b border-[#122033]/10 bg-[#f7f4ed]/95 px-4 py-4 backdrop-blur md:px-8 sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#122033] font-serif text-lg font-bold text-[#e2b757]">M</span>
            <span className="font-serif text-xl font-bold tracking-wide">MindReply</span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-[#4d5c6f] transition hover:bg-white hover:text-[#122033]">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/admin" className="hidden rounded-full border border-[#122033]/15 px-4 py-2 text-sm font-semibold text-[#122033] transition hover:border-[#2f6f72] md:inline-flex">
              Open Assistant
            </Link>
            <Link href="/agent" className="rounded-full bg-[#122033] px-4 py-2 text-sm font-semibold text-[#f8f5f0] transition hover:bg-[#1c3150]">
              Try Mind Read
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-[#122033] px-4 py-8 text-[#f8f5f0] md:px-8 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="py-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e2b757]/35 bg-[#e2b757]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#e2b757]">
              <Sparkles aria-hidden className="h-4 w-4" />
              Mainstream Executive AI
            </div>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl font-bold leading-[0.94] md:text-7xl">
              Your Administrative Twin for the Next Move.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#d9e3e7] md:text-lg">
              MindReply is now a full-scale AI Administrative Assistant. Install it as a PWA on your phone and let your operating twin handle the pressure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/admin" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e2b757] px-5 py-3 text-sm font-bold text-[#122033] transition hover:bg-[#f0cf7a]">
                Launch Assistant <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link href="/pack" className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-[#f8f5f0] transition hover:border-[#e2b757] hover:text-[#e2b757]">
                View Revenue Pack
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#91d2c8]">
                      <Icon aria-hidden className="h-4 w-4" />
                      {item.label}
                    </div>
                    <p className="mt-3 text-sm font-semibold text-[#f8f5f0]">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="min-h-[43rem] overflow-hidden rounded-lg border border-white/10 bg-[#0d1729] shadow-2xl shadow-black/20">
            <MRAgentChat compact />
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#f7f4ed] px-4 py-14 md:px-8 border-b border-[#122033]/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f72]">Pricing</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
              High-revenue operating packs.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-[#122033]/10 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold">Founder Pack</h3>
              <p className="mt-2 text-sm text-[#59687b]">For solo founders and operators.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-sm text-[#59687b]">/mo</span>
              </div>
              <ul className="mt-8 space-y-4 text-sm text-[#59687b]">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#2f6f72]" /> 50 Mind Reads / mo</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#2f6f72]" /> PWA Mobile Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#2f6f72]" /> Basic Admin Assistant</li>
              </ul>
              <button 
                onClick={() => {
                  fetch('/api/checkout', {
                    method: 'POST',
                    body: JSON.stringify({ plan: 'founder' }),
                  }).then(res => res.json()).then(data => {
                    if (data.url) window.location.href = data.url;
                  });
                }}
                className="mt-8 block w-full rounded-full bg-[#122033] py-3 text-center text-sm font-bold text-[#f8f5f0] transition hover:bg-[#1c3150]"
              >
                Get Started
              </button>
            </div>
            <div className="rounded-2xl border-2 border-[#e2b757] bg-[#122033] p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#e2b757] text-[#122033] px-4 py-1 text-[10px] font-bold uppercase tracking-wider rounded-bl-lg">Most Popular</div>
              <h3 className="font-serif text-2xl font-bold text-[#f8f5f0]">Agency Pack</h3>
              <p className="mt-2 text-sm text-[#d9e3e7]/70">For growing agencies and teams.</p>
              <div className="mt-6 flex items-baseline gap-1 text-[#f8f5f0]">
                <span className="text-4xl font-bold">$149</span>
                <span className="text-sm text-[#d9e3e7]/70">/mo</span>
              </div>
              <ul className="mt-8 space-y-4 text-sm text-[#d9e3e7]/70">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#e2b757]" /> Unlimited Mind Reads</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#e2b757]" /> Full Agentic Workflows</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#e2b757]" /> Priority Admin Twin</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#e2b757]" /> Custom Playbooks</li>
              </ul>
              <button 
                onClick={() => {
                  fetch('/api/checkout', {
                    method: 'POST',
                    body: JSON.stringify({ plan: 'agency' }),
                  }).then(res => res.json()).then(data => {
                    if (data.url) window.location.href = data.url;
                  });
                }}
                className="mt-8 block w-full rounded-full bg-[#e2b757] py-3 text-center text-sm font-bold text-[#122033] transition hover:bg-[#f0cf7a]"
              >
                Get Started
              </button>
            </div>
            <div className="rounded-2xl border border-[#122033]/10 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold">Enterprise</h3>
              <p className="mt-2 text-sm text-[#59687b]">For high-stakes organizations.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="mt-8 space-y-4 text-sm text-[#59687b]">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#2f6f72]" /> Dedicated AI Instance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#2f6f72]" /> White-glove Onboarding</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#2f6f72]" /> API & MCP Integration</li>
              </ul>
              <Link href="/contact" className="mt-8 block w-full rounded-full border border-[#122033]/15 py-3 text-center text-sm font-bold text-[#122033] transition hover:border-[#2f6f72]">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="border-b border-[#122033]/10 bg-[#fbfaf6] px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f72]">Administrative Layers</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">
                A mainstream operating system for founders.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#59687b]">
              From inbox triage to meeting summaries, MindReply handles the administrative load so you can focus on high-revenue decisions.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {platformLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <article key={layer.title} className="rounded-lg border border-[#122033]/10 bg-[#f7f4ed] p-5 shadow-sm shadow-[#122033]/5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#122033] text-[#e2b757]"><Icon aria-hidden className="h-5 w-5" /></span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#2f6f72]">{layer.detail}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-bold leading-tight">{layer.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#59687b]">{layer.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className="px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b7430]">PWA Workflow</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
              Mobile-first, sharp structure, one useful action.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#59687b]">
              The PWA interface is designed for the founder on the move. Fast intake, instant reads, and one-tap actions.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {workflow.map((item) => (
              <article key={item.step} className="rounded-lg border border-[#122033]/10 bg-white p-5 shadow-sm shadow-[#122033]/5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d96f4a]">{item.step}</span>
                <h3 className="mt-4 font-serif text-2xl font-bold leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#59687b]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="promotion" className="bg-[#103b39] px-4 py-14 text-[#f8f5f0] md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#91d2c8]">Revenue Readiness</p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
                Turn administrative efficiency into revenue.
              </h2>
            </div>
            <p className="text-sm leading-7 text-[#d3e5e2]">
              The platform prepares your launch material and tracks your revenue truth, ensuring every administrative move contributes to your bottom line.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {promotionLanes.map((lane) => {
              const Icon = lane.icon;
              return (
                <article key={lane.title} className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#e2b757] text-[#122033]"><Icon aria-hidden className="h-5 w-5" /></span>
                  <h3 className="mt-5 font-serif text-2xl font-bold leading-tight">{lane.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#d3e5e2]">{lane.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#122033] text-[#f8f5f0] px-4 py-12 md:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#e2b757] font-serif text-lg font-bold text-[#122033]">M</span>
            <span className="font-serif text-xl font-bold tracking-wide">MindReply</span>
          </div>
          <div className="flex gap-8 text-sm font-semibold text-[#d9e3e7]/60">
            <Link href="/trust" className="hover:text-[#e2b757] transition">Trust</Link>
            <Link href="/privacy" className="hover:text-[#e2b757] transition">Privacy</Link>
            <Link href="/contact" className="hover:text-[#e2b757] transition">Contact</Link>
          </div>
          <p className="text-xs text-[#d9e3e7]/40">© 2026 MindReply. PWA Enabled. Mainstream Executive AI.</p>
        </div>
      </footer>
    </main>
  );
}
