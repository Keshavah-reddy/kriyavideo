"use client";
import Link from "next/link";
import { Video, LayoutDashboard, Settings, Upload, CheckCircle2, AlertCircle } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

export default function Admin() {
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
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-colors">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white transition-colors">
            <Settings size={18} /> Admin
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="h-16 border-b border-white/10 flex items-center px-8 justify-between sticky top-0 bg-brand-dark/80 backdrop-blur z-10">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
          <div className="w-8 h-8 rounded-full bg-brand-red/20 border border-brand-red flex items-center justify-center text-brand-red font-medium">
            A
          </div>
        </header>

        <div className="p-8 max-w-5xl mx-auto w-full space-y-8">
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Branding</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <h3 className="font-medium mb-4">Brand Identity</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-brand-cream/60 mb-1">Brand Name</label>
                    <input type="text" defaultValue="Kriya Meet" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-brand-red transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs text-brand-cream/60 mb-1">Custom Domain</label>
                    <div className="flex bg-black/40 border border-white/10 rounded-xl overflow-hidden">
                      <span className="px-4 py-2 bg-white/5 text-brand-cream/60 border-r border-white/10 text-sm">https://</span>
                      <input type="text" defaultValue="meet.yourdomain.com" className="w-full bg-transparent px-4 py-2 outline-none focus:border-brand-red transition-colors text-sm" />
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="font-medium mb-4">Visuals</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-brand-cream/60 mb-1">Logo</label>
                    <div className="h-20 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-brand-cream/40 hover:bg-white/5 transition-colors cursor-pointer">
                      <Upload size={20} className="mb-1" />
                      <span className="text-xs">Upload Logo</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-brand-cream/60 mb-1">Primary Color</label>
                    <div className="flex gap-2">
                      {['#e11d48', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'].map(color => (
                        <div key={color} className={`w-8 h-8 rounded-full cursor-pointer ${color === '#e11d48' ? 'ring-2 ring-white ring-offset-2 ring-offset-brand-dark' : ''}`} style={{ backgroundColor: color }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">API Integration Status</h2>
            <GlassCard>
              <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <h3 className="font-medium text-lg">JioMeet CPaaS</h3>
                  <p className="text-sm text-brand-cream/60">Connect your platform to JioMeet infrastructure.</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-sm font-medium flex items-center gap-2">
                  <AlertCircle size={16} /> Pending Configuration
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-brand-cream/80">JioMeet App ID</span>
                  <span className="text-brand-cream/40">Not connected</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-brand-cream/80">Secret Key</span>
                  <span className="text-brand-cream/40">Not connected</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-brand-cream/80">Domain Whitelisting</span>
                  <span className="text-amber-500/70">Pending</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-brand-cream/80">Fixed IP Requirement</span>
                  <span className="text-amber-500/70">To be confirmed by JioMeet</span>
                </div>
              </div>

              <div className="mt-8">
                <button className="px-6 py-3 rounded-full bg-brand-red hover:bg-brand-red/90 text-white font-medium transition-colors">
                  Configure API Keys
                </button>
              </div>
            </GlassCard>
          </section>

        </div>
      </main>
    </div>
  );
}
