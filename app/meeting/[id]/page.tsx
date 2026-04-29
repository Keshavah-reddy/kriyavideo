"use client";
import { useParams, useRouter } from "next/navigation";
import { Mic, MicOff, Video as VideoIcon, VideoOff, MonitorUp, MessageSquare, Users, PhoneOff } from "lucide-react";
import { useState } from "react";

export default function MeetingRoom() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  return (
    <div className="h-screen w-full bg-[#000] flex flex-col overflow-hidden text-white">
      {/* Top Bar */}
      <header className="h-14 bg-black/50 border-b border-white/10 flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center">
            <span className="text-[10px] font-bold">KM</span>
          </div>
          <span className="font-medium text-sm text-brand-cream/80">Kriya Meet</span>
        </div>
        
        <div className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-mono text-brand-cream/70 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          {id}
        </div>
        
        <div className="w-6"></div> {/* Spacer */}
      </header>

      {/* Main Meeting Area */}
      <main className="flex-1 relative p-4 flex items-center justify-center">
        {/* Replace this placeholder with JioMeet Web SDK or iframe after credentials are received. */}
        <div className="absolute inset-0 bg-brand-dark/50 flex flex-col items-center justify-center pointer-events-none">
          <div className="glass-panel p-8 rounded-3xl max-w-md text-center">
            <div className="w-16 h-16 rounded-full bg-brand-red/20 text-brand-red mx-auto mb-6 flex items-center justify-center">
              <VideoIcon size={32} />
            </div>
            <h2 className="text-xl font-bold mb-2">Meeting Room: {id}</h2>
            <p className="text-brand-cream/60 mb-6 text-sm">
              JioMeet SDK / iframe will load here after API access.
            </p>
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-brand-cream/40">
              Awaiting CPaaS Integration
            </div>
          </div>
        </div>

        {/* Video Grid Mockup */}
        <div className="w-full h-full max-w-6xl max-h-[80vh] rounded-2xl overflow-hidden border border-white/5 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-red/20 border border-brand-red flex items-center justify-center text-brand-red">
              A
            </div>
            <span className="text-sm font-medium drop-shadow-md">You (Host)</span>
          </div>
        </div>
      </main>

      {/* Bottom Controls */}
      <footer className="h-20 bg-black/80 border-t border-white/10 flex items-center justify-center gap-3 px-6 z-10">
        <button 
          onClick={() => setMicOn(!micOn)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${micOn ? 'bg-white/10 hover:bg-white/20' : 'bg-red-500 hover:bg-red-600'}`}
        >
          {micOn ? <Mic size={20} /> : <MicOff size={20} />}
        </button>
        
        <button 
          onClick={() => setCamOn(!camOn)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${camOn ? 'bg-white/10 hover:bg-white/20' : 'bg-red-500 hover:bg-red-600'}`}
        >
          {camOn ? <VideoIcon size={20} /> : <VideoOff size={20} />}
        </button>
        
        <div className="w-px h-8 bg-white/10 mx-2"></div>
        
        <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white/80 hover:text-white">
          <MonitorUp size={20} />
        </button>
        
        <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white/80 hover:text-white">
          <Users size={20} />
        </button>
        
        <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white/80 hover:text-white relative">
          <MessageSquare size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-red"></span>
        </button>

        <div className="w-px h-8 bg-white/10 mx-2"></div>

        <button 
          onClick={() => router.push('/dashboard')}
          className="px-6 h-12 rounded-full bg-red-600 hover:bg-red-700 flex items-center gap-2 font-medium transition-colors shadow-[0_0_15px_rgba(220,38,38,0.4)]"
        >
          <PhoneOff size={18} />
          <span className="hidden sm:inline">End Call</span>
        </button>
      </footer>
    </div>
  );
}
