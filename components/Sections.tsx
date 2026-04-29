export function Sections() {
  return (
    <>
      <section id="how-it-works" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Build your branded meeting website" },
            { step: "2", title: "Get JioMeet CPaaS approval" },
            { step: "3", title: "Connect API credentials" },
            { step: "4", title: "Launch on your domain" }
          ].map((s, i) => (
            <div key={i} className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red text-2xl font-bold mx-auto mb-6 z-10 relative">
                {s.step}
              </div>
              <h3 className="text-xl font-medium">{s.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 bg-brand-navy/50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Perfect for any use case</h2>
        </div>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {["Online classes", "Coaching institutes", "Business meetings", "Webinars", "Internal team calls", "Consultation sessions"].map((useCase, i) => (
            <div key={i} className="glass-panel px-6 py-3 rounded-full text-lg">
              {useCase}
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pricing</h2>
          <p className="text-brand-cream/60">Pricing depends on JioMeet CPaaS approval and usage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Starter", "Business", "Enterprise"].map((plan, i) => (
            <div key={i} className="glass-panel rounded-3xl p-8 flex flex-col h-full border-t border-white/20">
              <h3 className="text-2xl font-bold mb-2">{plan}</h3>
              <p className="text-brand-cream/50 mb-8 pb-8 border-b border-white/10">Tailored to your scale.</p>
              <div className="mt-auto">
                <button className="w-full glass-panel py-3 rounded-full hover:bg-white/10 transition-colors">Contact Sales</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-24 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">FAQ</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Can this run on Vercel?", a: "Yes, the frontend and serverless API routes can run on Vercel. Fixed IP may depend on JioMeet API requirements." },
            { q: "Is this a full Zoom clone?", a: "No, this is a branded meeting platform powered by JioMeet CPaaS after integration." },
            { q: "Can I use my own domain?", a: "Yes, you can connect a custom domain through Vercel." },
            { q: "Is VPS required?", a: "Not for the frontend. VPS may only be required if JioMeet demands fixed IP whitelisting." },
            { q: "Can I change logo and colors?", a: "Yes, the admin branding section is prepared for this." }
          ].map((faq, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6">
              <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
              <p className="text-brand-cream/60">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center">
              <span className="text-white text-xs">K</span>
            </div>
            <span className="font-bold tracking-tight">Kriya Meet</span>
          </div>
          <p className="text-brand-cream/40 text-sm">© {new Date().getFullYear()} Kriya Meet. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
