export function SectionHeading({ label, title, light = false, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      {label && (
        <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          {label}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-band-text" : "text-heading"
        }`}
      >
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
    </div>
  );
}

export function PageHero({ label, title, subtitle, description, children, image }) {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        {label && (
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            {label}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gold-400 text-lg md:text-xl font-medium uppercase tracking-wide mt-4">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-white/80 text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
