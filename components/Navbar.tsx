import Link from "next/link";
import { Video } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
            <Video size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">Kriya Meet</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-cream/80">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-sm font-medium hover:text-white transition-colors hidden sm:block">
            Dashboard
          </Link>
          <Link href="/dashboard" className="bg-brand-red hover:bg-brand-red/90 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(225,29,72,0.5)]">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
