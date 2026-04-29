"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Video, Calendar, LogIn, Clock, Settings, LayoutDashboard, Copy, Check } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

export default function Dashboard() {
  const router = useRouter();
  const [meeting, setMeeting] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [joinId, setJoinId] = useState("");

  const createInstantMeeting = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/meetings/create", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setMeeting(data.meeting);
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const copyLink = () => {
    if (!meeting) return;
    navigator.clipboard.writeText(window.location.origin + meeting.joinUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const joinMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (joinId.trim()) {
      router.push(`/meeting/${joinId.trim()}`);
    }
  };

  return (
    <div className="min-h-screen flex bg-brand-dark">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 hidden md:flex flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
              <Video size={18} className="text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Kriya Meet</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-colors">
            <Settings size={18} /> Admin
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="h-16 border-b border-white/10 flex items-center px-8 justify-between sticky top-0 bg-brand-dark/80 backdrop-blur z-10">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="w-8 h-8 rounded-full bg-brand-red/20 border border-brand-red flex items-center justify-center text-brand-red font-medium">
            A
          </div>
        </header>

        <div className="p-8 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <GlassCard className="flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-red/20 text-brand-red flex items-center justify-center mb-4">
                  <Video size={20} />
                </div>
                <h3 className="text-lg font-medium mb-1">Instant Meeting</h3>
                <p className="text-sm text-brand-cream/60 mb-6">Start a new meeting immediately.</p>
              </div>
              <button 
                onClick={createInstantMeeting}
                disabled={loading}
                className="w-full py-3 rounded-full bg-brand-red hover:bg-brand-red/90 text-white font-medium transition-colors"
              >
                {loading ? "Creating..." : "Create Instant Meeting"}
              </button>
            </GlassCard>

            <GlassCard className="flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center mb-4">
                  <Calendar size={20} />
                </div>
                <h3 className="text-lg font-medium mb-1">Schedule Meeting</h3>
                <p className="text-sm text-brand-cream/60 mb-6">Plan a meeting for later.</p>
              </div>
              <button className="w-full py-3 rounded-full glass-panel hover:bg-white/10 font-medium transition-colors">
                Schedule
              </button>
            </GlassCard>

            <GlassCard className="flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center mb-4">
                  <LogIn size={20} />
                </div>
                <h3 className="text-lg font-medium mb-1">Join Meeting</h3>
                <p className="text-sm text-brand-cream/60 mb-6">Join with an ID or link.</p>
              </div>
              <form onSubmit={joinMeeting} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Meeting ID" 
                  value={joinId}
                  onChange={(e) => setJoinId(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-full px-4 py-2 outline-none focus:border-brand-red transition-colors text-sm"
                />
                <button type="submit" className="px-4 py-2 rounded-full glass-panel hover:bg-white/10 font-medium transition-colors text-sm">
                  Join
                </button>
              </form>
            </GlassCard>
          </div>

          {/* Meeting Modal / Status */}
          {meeting && (
            <div className="mb-8 p-6 rounded-3xl border border-brand-red/30 bg-brand-red/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent"></div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                Meeting Ready
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-brand-cream/50 mb-1">Meeting ID</p>
                  <p className="font-mono text-lg">{meeting.meetingId}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-cream/50 mb-1">Passcode</p>
                  <p className="font-mono text-lg">{meeting.passcode}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={meeting.hostUrl} className="flex-1 bg-brand-red hover:bg-brand-red/90 text-center py-3 rounded-full font-medium transition-colors">
                  Start Meeting
                </Link>
                <button onClick={copyLink} className="flex-1 glass-panel hover:bg-white/10 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? "Copied!" : "Copy Join Link"}
                </button>
              </div>
            </div>
          )}

          <h2 className="text-xl font-semibold mb-4 mt-10">Recent Meetings</h2>
          <GlassCard className="p-0 overflow-hidden">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white/20">
                <Clock size={24} />
              </div>
              <p className="text-brand-cream/60">No recent meetings found.</p>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
