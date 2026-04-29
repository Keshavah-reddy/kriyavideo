import Link from "next/link";
import { GlassCard } from "./GlassCard";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-brand-dark"></div>
      <div className="absolute inset-0 glow-red opacity-60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 w-full">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block mb-6">
            <div className="glass-panel px-4 py-2 rounded-full text-brand-red font-medium text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              White Label Ready
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            YOUR BRANDED <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">MEETING PLATFORM</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/70 mb-10 max-w-2xl mx-auto lg:mx-0">
            Launch a premium video meeting experience under your own brand, powered by enterprise-grade meeting infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] text-center">
              Start Demo
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto glass-panel hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all text-center">
              View Dashboard
            </Link>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-2xl hidden lg:block">
          <GlassCard className="aspect-video relative overflow-hidden p-0 border border-white/10 shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-10 bg-black/40 backdrop-blur flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="w-full h-full bg-black/80 flex items-center justify-center relative">
              <div className="grid grid-cols-2 gap-4 p-12 w-full h-full mt-10">
                <div className="bg-brand-navy rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-brand-red/20 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs">You</div>
                </div>
                <div className="bg-brand-navy rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs">Guest</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
