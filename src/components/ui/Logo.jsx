export function TurtleIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M32 8L44 20L32 32L20 20L32 8Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M32 32L44 44L32 56L20 44L32 32Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M32 8V56" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20L32 32L44 20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 44L32 32L44 44" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ compact = false, showTagline = true, onDark = false, className = "" }) {
  const nameClass = onDark ? "text-white" : "text-heading";
  const tagClass = onDark ? "text-gold-400" : "text-gold-500";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/logo.png" alt="Turtle Shell Mortgage Partners" className="h-16 w-16 object-contain" />
      <div className="text-left leading-tight">
        <div className="text-[11px] sm:text-xs font-bold tracking-[0.12em] text-gold-400">
          TURTLE SHELL
        </div>
        <div className={`text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] ${nameClass}`}>
          MORTGAGE PARTNERS
        </div>
        {showTagline && !compact && (
          <div className={`hidden sm:block text-[8px] tracking-[0.18em] mt-0.5 ${tagClass}`}>
            YOUR DESTINY, BY YOUR OWN DESIGN
          </div>
        )}
      </div>
    </div>
  );
}
