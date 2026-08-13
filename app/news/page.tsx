"use client";

import Link from "next/link";
import { 
  Newspaper, 
  ArrowUpRight, 
  Clock,
  Tag
} from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "Aug 14, 2026",
    title: "A11 Real Estate Integration Live in Sofia",
    excerpt: "MindReply successfully integrated the A11 Premium Agent for real estate operations in Bulgaria. Automated listing management is now active for Druzhba 2 properties.",
    category: "Real Estate",
    readTime: "2 min"
  },
  {
    id: 2,
    date: "Aug 12, 2026",
    title: "Executive Nervous System V2.0 Deployment",
    excerpt: "The core decision layer has been upgraded to support autonomous multi-agent task assignment. Risk scoring accuracy improved by 40%.",
    category: "Platform",
    readTime: "3 min"
  },
  {
    id: 3,
    date: "Aug 10, 2026",
    title: "Privacy-First Intelligence Protocol Updated",
    excerpt: "Zero-knowledge encryption is now standard for all MRagent receipts. No raw pressure data is stored beyond the 30-minute processing window.",
    category: "Security",
    readTime: "4 min"
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
              <div className="w-4 h-4 bg-black rounded-full" />
            </div>
            <span className="font-bold tracking-tighter text-xl">MindReply</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/real-estate" className="text-sm text-white/60 hover:text-white transition-colors">Real Estate</Link>
            <Link href="/agent" className="text-sm text-white/60 hover:text-white transition-colors">MRagent</Link>
            <Link href="/pack" className="text-sm text-white/60 hover:text-white transition-colors">Pack</Link>
          </div>

          <Link 
            href="/agent" 
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-sm hover:bg-white/90 transition-colors"
          >
            Launch Agent
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6">
          <div className="mb-20">
            <h1 className="text-5xl font-bold tracking-tighter mb-4">Pulse.</h1>
            <p className="text-white/40 text-lg uppercase tracking-widest font-mono">Real-time business updates & innovations</p>
          </div>

          <div className="space-y-16">
            {newsItems.map((item) => (
              <article key={item.id} className="group cursor-pointer">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/4">
                    <div className="flex items-center gap-2 text-white/40 text-xs font-mono mb-2">
                      <Clock className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
                      <Tag className="w-3 h-3" />
                      <span className="uppercase tracking-tighter">{item.category}</span>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-white/80 transition-colors flex items-center justify-between">
                      {item.title}
                      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" />
                    </h2>
                    <p className="text-white/60 leading-relaxed text-lg mb-6">
                      {item.excerpt}
                    </p>
                    <div className="text-sm font-bold text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                      Read full update <div className="w-8 h-px bg-white/20 group-hover:w-12 transition-all" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-32 p-12 border border-white/10 rounded-sm bg-white/[0.02] text-center">
            <Newspaper className="w-12 h-12 mx-auto mb-6 text-white/20" />
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Stay in the Loop</h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Get the latest on AI real estate, executive infrastructure, and market innovations delivered to your inbox.
            </p>
            <div className="flex max-w-sm mx-auto gap-2">
              <input 
                type="email" 
                placeholder="CEO@company.com" 
                className="flex-1 bg-white/5 border border-white/10 px-4 py-2 rounded-sm text-sm focus:outline-none focus:border-white/40 transition-colors"
              />
              <button className="px-6 py-2 bg-white text-black text-sm font-bold rounded-sm hover:bg-white/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <span className="font-bold tracking-tighter text-sm">MindReply News</span>
          </div>
          <div className="flex gap-8 text-xs text-white/40 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/real-estate" className="hover:text-white transition-colors">Real Estate</Link>
            <a href="mailto:angelllkr@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-[10px] text-white/20 font-mono uppercase">
            EST. 2026 • EXECUTIVE PULSE
          </div>
        </div>
      </footer>
    </div>
  );
}
