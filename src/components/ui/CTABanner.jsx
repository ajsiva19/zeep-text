import { Button } from "./Button";
import { Home } from "lucide-react";

export function CTABanner({
  title = "Ready to take the next step?",
  subtitle = "Let's build your future together.",
  buttonText = "Talk To An Expert",
  buttonTo = "/contact",
}) {
  return (
    <section className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
              <Home className="w-6 h-6 text-navy-950" />
            </div>
            <div>
              <p className="text-body text-sm">{title}</p>
              <p className="text-heading text-xl md:text-2xl font-bold">{subtitle}</p>
            </div>
          </div>
          <Button to={buttonTo} size="lg">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CTASection({
  title,
  description,
  primaryText = "Get Started",
  primaryTo = "/contact",
  secondaryText,
  secondaryTo = "/contact",
}) {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">{title}</h2>
        {description && (
          <p className="text-base leading-relaxed mb-8 text-body">{description}</p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          <Button to={primaryTo}>{primaryText}</Button>
          {secondaryText && (
            <Button to={secondaryTo} variant="outline">
              {secondaryText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
