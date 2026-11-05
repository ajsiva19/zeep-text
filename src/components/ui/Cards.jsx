import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-surface rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-line">
      <div className="w-14 h-14 rounded-full bg-navy-950 dark:bg-gold-400/10 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-gold-400" />
      </div>
      <h3 className="text-heading font-bold text-lg mb-3">{title}</h3>
      <p className="text-body text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function GoalCard({ icon: Icon, title, description, to }) {
  const className =
    "group bg-surface rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-line hover:border-gold-400/30 block";

  const content = (
    <>
      <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-navy-950" />
      </div>
      <h3 className="text-heading font-bold text-lg mb-3">{title}</h3>
      <p className="text-body text-sm leading-relaxed">{description}</p>
    </>
  );

  return to ? (
    <Link to={to} className={className}>
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
}

export function FeatureItem({ title, description }) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center shrink-0 mt-0.5">
        <Check className="w-4 h-4 text-navy-950" strokeWidth={3} />
      </div>
      <div>
        <h4 className="text-band-text font-semibold mb-1">{title}</h4>
        <p className="text-band-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function StepCard({ number, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-5">
        <span className="text-navy-950 font-bold text-lg">{number}</span>
      </div>
      <h3 className="text-heading font-bold text-lg mb-3">{title}</h3>
      <p className="text-body text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="w-14 h-14 rounded-full bg-navy-900/60 border border-gold-400/30 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-gold-400" />
      </div>
      <h3 className="text-band-text font-bold mb-2">{title}</h3>
      <p className="text-band-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-heading font-semibold pr-4">{question}</span>
        <span className="text-gold-400 text-2xl shrink-0">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="pb-5 text-body text-sm leading-relaxed">{answer}</div>
      )}
    </div>
  );
}
