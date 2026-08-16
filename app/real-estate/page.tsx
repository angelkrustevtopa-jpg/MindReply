import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

const contactHref = "mailto:mind.repl@gmail.com?subject=A11-K%20Real%20Estate%20Operator%20Enquiry";

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-emerald-300/30">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080808]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="group flex items-center gap-2" aria-label="MindReply home">
            <div className="flex size-8 items-center justify-center rounded-sm bg-emerald-300 transition-transform duration-200 group-hover:rotate-45">
              <div className="size-3 rounded-full bg-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter">MindReply</span>
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            <a href="#operator-system" className="text-sm text-white/60 transition-colors hover:text-white">Operator system</a>
            <a href="#engagement" className="text-sm text-white/60 transition-colors hover:text-white">Engagement</a>
            <a href="#partnerships" className="text-sm text-white/60 transition-colors hover:text-white">Partnerships</a>
          </div>
          <a href={contactHref} className="rounded-sm bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-emerald-200">
            Start a conversation
          </a>
        </div>
      </nav>

      <main className="overflow-hidden pt-20">
        <section className="relative border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(110,231,183,0.13),transparent_26%),radial-gradient(circle_at_20%_75%,rgba(59,130,246,0.10),transparent_30%)]" />
          <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-200/5 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-100">
                <Building2 className="size-3.5" />
                A11-K REAL ESTATE OPERATOR DESK
              </div>
              <h1 className="text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Make every property decision <span className="text-emerald-300">traceable.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
                A practical intelligence layer for property operators who need a clearer view of listings, enquiries, local-market research, and the decisions that move a deal forward.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={contactHref} className="inline-flex items-center justify-center gap-2 rounded-sm bg-emerald-300 px-6 py-4 font-bold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:bg-emerald-200">
                  Discuss an operator pilot <ArrowRight className="size-4" />
                </a>
                <a href="#operator-system" className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-4 font-bold text-white transition-colors hover:border-white/35 hover:bg-white/5">
                  See the operating model
                </a>
              </div>
              <p className="mt-5 text-sm text-white/40">For independent operators, boutique agencies, portfolio teams, and selected partners.</p>
            </div>

            <aside className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Operator brief</p>
                  <p className="mt-1 text-sm text-white/55">A focused first engagement</p>
                </div>
                <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" aria-label="Available for introductions" />
              </div>
              <ol className="mt-6 space-y-6">
                {[
                  ["01", "Map the portfolio", "Establish the listings, priority enquiries, owners, and decision cadence."],
                  ["02", "Find the operating friction", "Identify where research, handoffs, or follow-ups lose commercial momentum."],
                  ["03", "Pilot a controlled workflow", "Deploy a narrow, reviewable system with human decision ownership intact."],
                ].map(([number, title, detail]) => (
                  <li key={number} className="grid grid-cols-[2.25rem_1fr] gap-3">
                    <span className="font-mono text-sm text-emerald-200">{number}</span>
                    <div>
                      <h2 className="font-semibold">{title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-white/50">{detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        <section id="operator-system" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">What the desk supports</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Less fragmented work. More defensible progress.</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">The A11-K operator desk is designed around clear research, structured priorities, and reviewable actions—not opaque automation or invented certainty.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              { icon: MapPin, title: "Local market briefs", body: "Turn a defined locality and property type into a focused research brief that supports human pricing and positioning decisions." },
              { icon: Users, title: "Enquiry triage", body: "Create a consistent review path for inbound interest, follow-up priorities, and handover context across a small team." },
              { icon: BarChart3, title: "Portfolio visibility", body: "Bring listing status, commercial questions, and next decisions into a readable operating view for the people accountable." },
              { icon: ShieldCheck, title: "Controlled workflows", body: "Keep human approvals at the decision points that matter, with a clear record of why a workflow moved forward." },
              { icon: CheckCircle2, title: "Listing quality checks", body: "Use repeatable review prompts to spot missing facts, weak positioning, and consistency gaps before a listing goes live." },
              { icon: CalendarDays, title: "Decision cadence", body: "Set a practical rhythm for reviewing priority properties, open enquiries, and the next commercial actions." },
            ].map(({ icon: Icon, title, body }) => (
              <article key={title} className="bg-[#080808] p-7 sm:p-8">
                <Icon className="size-6 text-emerald-200" />
                <h3 className="mt-8 text-xl font-bold tracking-tight">{title}</h3>
                <p className="mt-3 leading-relaxed text-white/55">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="engagement" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Engagement principles</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">A useful system begins with a bounded problem.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Human ownership", "The operator remains accountable for pricing, approvals, communications, and final commercial judgment."],
                ["Evidence first", "Recommendations should point back to supplied portfolio context and clearly labelled research inputs."],
                ["Narrow before broad", "We begin with one commercial workflow that can be reviewed, measured, and improved."],
                ["Privacy by design", "Share only the data required for the agreed pilot; sensitive information stays under the operator's control."],
              ].map(([title, body]) => (
                <div key={title} className="border-l border-emerald-200/45 pl-5">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partnerships" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="relative overflow-hidden border border-emerald-200/20 bg-[linear-gradient(120deg,rgba(110,231,183,0.16),rgba(255,255,255,0.035)_48%,rgba(59,130,246,0.10))] p-8 sm:p-14">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">Partnership enquiries</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Bring the operating question. We will bring a structured first answer.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">Share your location, portfolio type, team structure, and the bottleneck you want to resolve. Suitable requests receive a focused response and a proposed next conversation.</p>
              <a href={contactHref} className="mt-9 inline-flex items-center gap-2 rounded-sm bg-white px-6 py-4 font-bold text-black transition-colors hover:bg-emerald-100">
                Enquire about a partnership <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>MindReply · A11-K real estate operator desk</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <a href={contactHref} className="transition-colors hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
