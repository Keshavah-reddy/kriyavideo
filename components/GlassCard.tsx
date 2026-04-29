export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass-panel rounded-3xl p-6 ${className}`}>
      {children}
    </div>
  );
}
