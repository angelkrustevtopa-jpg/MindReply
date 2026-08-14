"use client";

import Link from "next/link";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  ArrowRight,
  MapPin,
  Calendar
} from "lucide-react";

export default function RealEstatePage() {
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
            <Link href="/#platform" className="text-sm text-white/60 hover:text-white transition-colors">Platform</Link>
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
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">
              <Building2 className="w-3 h-3" />
              <span>A11 Executive Agent Integration</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Real Estate <br />
              <span className="text-white/40">Operations.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              Advanced Manus Intelligence infrastructure for high-stakes property management. 
              Manage listings, lead scoring, and market analysis with the A11 Command Center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                Connect Portfolio <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-sm hover:bg-white/10 transition-all">
                Request Market Pulse
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-sm bg-white/[0.02]">
              <TrendingUp className="w-8 h-8 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-4 tracking-tight">Lead Scoring</h3>
              <p className="text-white/60 leading-relaxed">
                Prioritize high-intent prospects using Agentic-driven behavioral analysis and market intent signals.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-sm bg-white/[0.02]">
              <MapPin className="w-8 h-8 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-4 tracking-tight">Hyper-Local SEO</h3>
              <p className="text-white/60 leading-relaxed">
                Generate SEO-optimized listings for Sofia, London, and beyond. Dominate local search results.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-sm bg-white/[0.02]">
              <ShieldCheck className="w-8 h-8 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-4 tracking-tight">Compliance Audit</h3>
              <p className="text-white/60 leading-relaxed">
                Multi-agent verification systems to reduce errors in contract auditing and regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Transaction Counter - The "Make Money" Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="p-12 border border-white/10 rounded-sm bg-gradient-to-br from-white/[0.05] to-transparent">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div>
                <h2 className="text-4xl font-bold tracking-tighter mb-4">Revenue Truth</h2>
                <p className="text-white/60 mb-8 max-w-md">
                  Real-time transaction tracking for your real estate empire. 
                  Connect your bank or CRM to see the truth.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-sm text-white/40 uppercase tracking-widest mb-1">Active Deals</div>
                    <div className="text-3xl font-mono font-bold">0</div>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div>
                    <div className="text-sm text-white/40 uppercase tracking-widest mb-1">Total Revenue</div>
                    <div className="text-3xl font-mono font-bold">$0.00</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <button className="w-full md:w-auto px-12 py-6 bg-white text-black font-black text-lg rounded-sm hover:scale-105 transition-transform">
                  UPGRADE TO PREMIUM
                </button>
                <p className="text-center text-xs text-white/40 mt-4 tracking-tighter uppercase">
                  Secure Stripe Checkout • Instant Access
                </p>
              </div>
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
            <span className="font-bold tracking-tighter text-sm">MindReply Real Estate</span>
          </div>
          <div className="flex gap-8 text-xs text-white/40 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/#proof" className="hover:text-white transition-colors">Compliance</Link>
            <a href="mailto:angelllkr@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-[10px] text-white/20 font-mono">
            A.K. PERSISTENT MEMORY PROTOCOL V1.0
          </div>
        </div>
      </footer>
    </div>
  );
}
