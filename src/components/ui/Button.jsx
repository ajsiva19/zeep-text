import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-accent text-accent-fg hover:opacity-90 shadow-md hover:shadow-lg",
  gold:
    "bg-gradient-gold text-navy-950 hover:bg-gradient-gold-hover shadow-md hover:shadow-lg",
  secondary:
    "border-2 border-heading/30 text-heading hover:border-accent hover:text-accent",
  outline:
    "border-2 border-gold-400 text-gold-500 hover:bg-gold-400/10",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-sm",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-semibold uppercase tracking-wide transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
