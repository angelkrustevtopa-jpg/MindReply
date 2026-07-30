import Link from "next/link";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Calendar, 
  Settings, 
  Plus, 
  Search,
  Mic,
  ArrowLeft
} from "lucide-react";
import MRAgentChat from "@/components/MRAgentChat";

export default function AdminAssistant() {
  return (
    <main className="min-h-screen bg-[#081121] text-[#f8f5f0] flex flex-col">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-[#081121]/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 rounded-full hover:bg-white/5 transition">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="font-serif text-xl font-bold">Admin Assistant</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mr-2">
            <div className="h-2 w-2 rounded-full bg-[#e2b757] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#d9e3e7]/70">42 Credits</span>
          </div>
          <button className="p-2 rounded-full hover:bg-white/5 transition">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/5 transition">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main Content - Chat Interface */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4 py-6">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e2b757]/35 bg-[#e2b757]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#e2b757] mb-4">
            Active Operating Twin
          </div>
          <h2 className="text-3xl font-serif font-bold leading-tight">
            What's the next move, Alice?
          </h2>
          <p className="mt-2 text-[#d9e3e7]/70 text-sm">
            I'm ready to triage your inbox, draft replies, or summarize your latest meeting.
          </p>
        </div>

        <div className="flex-1 min-h-[500px] rounded-2xl border border-white/10 bg-[#0d1729] overflow-hidden shadow-2xl">
          <MRAgentChat compact mode="administrative" />
        </div>
      </div>

      {/* Bottom Navigation - PWA Style */}
      <nav className="sticky bottom-0 z-50 bg-[#081121]/90 backdrop-blur-lg border-t border-white/10 px-6 py-3 pb-8 flex justify-between items-center">
        <Link href="/admin" className="flex flex-col items-center gap-1 text-[#e2b757]">
          <LayoutDashboard className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-[#f8f5f0]/60 hover:text-[#f8f5f0] transition">
          <MessageSquare className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Chat</span>
        </button>
        
        {/* Central Action Button */}
        <button className="relative -top-6 bg-[#e2b757] text-[#122033] p-4 rounded-full shadow-lg shadow-[#e2b757]/20 active:scale-95 transition">
          <Plus className="h-7 w-7" />
        </button>

        <button className="flex flex-col items-center gap-1 text-[#f8f5f0]/60 hover:text-[#f8f5f0] transition">
          <Calendar className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Tasks</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#f8f5f0]/60 hover:text-[#f8f5f0] transition">
          <Mic className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Voice</span>
        </button>
      </nav>
    </main>
  );
}
