import { Monitor, Users, Shield, Globe, LayoutDashboard, Settings } from "lucide-react";
import { GlassCard } from "./GlassCard";

const features = [
  { icon: Monitor, title: "White-label branding", desc: "Your logo, your colors, your domain." },
  { icon: Users, title: "Meeting creation", desc: "Instant or scheduled meeting generation." },
  { icon: Shield, title: "Secure joining", desc: "Enterprise-grade encryption & passcodes." },
  { icon: Globe, title: "Custom domain ready", desc: "Host meetings on meet.yourbrand.com." },
  { icon: LayoutDashboard, title: "Admin dashboard", desc: "Manage users, meetings, and branding." },
  { icon: Settings, title: "JioMeet CPaaS ready", desc: "Built for seamless API integration." },
];

export function FeatureBento() {
  return (
    <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to launch your own meeting brand</h2>
        <p className="text-brand-cream/60 max-w-2xl mx-auto">Enterprise features bundled into a beautiful, cinematic interface.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <GlassCard key={i} className="hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-brand-red/20 text-brand-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <f.icon size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-brand-cream/60">{f.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
