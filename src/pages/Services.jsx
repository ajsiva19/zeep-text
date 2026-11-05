import { motion } from "framer-motion";
import { Home, Key, RefreshCw, Landmark, TrendingUp, Building2, Briefcase, HelpCircle } from "lucide-react";
import { PageHero } from "../components/ui/SectionHeading";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/ui/CTABanner";
import { Button } from "../components/ui/Button";
import { HERO_IMAGE } from "../data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  {
    id: "home-purchase",
    icon: Home,
    title: "Home Purchase Mortgages",
    subtitle: "Find The Right Way Forward For Your Home Purchase",
    description:
      "Buying a property is a major financial decision. We help you understand the mortgage process and explore financing options based on your circumstances.",
    items: [
      "Home purchase financing",
      "Mortgage affordability guidance",
      "Pre-approval guidance",
      "Mortgage option comparison",
      "Application preparation",
      "Documentation guidance",
      "Mortgage process support",
    ],
  },
  {
    id: "first-time-buyers",
    icon: Key,
    title: "First-Time Home Buyers",
    subtitle: "Your First Home Starts With The Right Guidance",
    description:
      "Buying your first home can feel complicated. We'll help you understand affordability, mortgage options, documentation, and application steps.",
    items: [
      "How the mortgage process works",
      "Deposit considerations",
      "Affordability",
      "Mortgage options",
      "Required documentation",
      "Application steps",
      "Closing considerations",
    ],
  },
  {
    id: "refinancing",
    icon: RefreshCw,
    title: "Mortgage Refinancing",
    subtitle: "Your Mortgage Should Keep Up With Your Goals",
    description:
      "Your financial situation can change over time. Refinancing may allow you to restructure your existing mortgage based on your current circumstances and goals.",
    items: [
      "Your existing mortgage",
      "Available refinancing options",
      "Changes to mortgage terms",
      "Potential equity access",
      "Debt restructuring considerations",
      "Long-term financing goals",
    ],
  },
  {
    id: "home-equity",
    icon: Landmark,
    title: "Home Equity & HELOC",
    subtitle: "Make Informed Decisions About Your Home Equity",
    description:
      "If you have built equity in your property, you may have options for accessing that equity, subject to applicable requirements.",
    items: [
      "Home improvements",
      "Major expenses",
      "Investment opportunities",
      "Eligible debt restructuring",
      "Other financial needs",
    ],
  },
  {
    id: "investment",
    icon: TrendingUp,
    title: "Investment Property Mortgages",
    subtitle: "Build Your Property Investment Strategy",
    description:
      "Investment properties can have different financing requirements from owner-occupied homes. We'll help you explore mortgage options based on your circumstances.",
    items: [
      "Investment property purchases",
      "Rental properties",
      "Portfolio expansion",
      "Investment property refinancing",
      "Equity-based financing",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Mortgages",
    subtitle: "Financing For Commercial Property",
    description:
      "Commercial property financing can involve different requirements from residential mortgages. We help business owners and investors explore financing options for eligible commercial properties.",
    items: [
      "Commercial property purchases",
      "Business premises",
      "Commercial refinancing",
      "Investment properties",
      "Multi-unit properties",
      "Property expansion",
    ],
  },
  {
    id: "self-employed",
    icon: Briefcase,
    title: "Self-Employed Mortgage Solutions",
    subtitle: "Your Income Is Different. Your Mortgage Journey Can Be Different Too.",
    description:
      "Self-employed borrowers may have unique income structures and documentation requirements. We can help you understand the mortgage considerations that may apply to your circumstances.",
    items: [],
  },
  {
    id: "alternative",
    icon: HelpCircle,
    title: "Alternative & Private Mortgage Solutions",
    subtitle: "When Traditional Financing Doesn't Fit Your Circumstances",
    description:
      "Some clients may require alternative financing because of unique financial circumstances, property situations, timing, or other considerations. Where appropriate, we can help you explore alternative mortgage solutions subject to applicable requirements.",
    items: [],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Mortgage Services"
        subtitle="Solutions Designed Around Your Goals"
        description="Every mortgage journey is different. Whether you're purchasing a home, refinancing an existing mortgage, accessing property equity, or investing in real estate, Turtle Shell Mortgage Partners can help you understand your financing options."
        image={HERO_IMAGE}
      />

      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              {...fadeUp}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-lg border border-line bg-surface hover:shadow-md transition-shadow scroll-mt-28"
            >
              <div className="lg:col-span-1">
                <div className="w-14 h-14 rounded-full bg-navy-950 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">{service.title}</h3>
                <p className="text-gold-500 text-sm font-medium mb-3">{service.subtitle}</p>
                <p className="text-body text-sm leading-relaxed">{service.description}</p>
              </div>
              {service.items.length > 0 && (
                <div className="lg:col-span-2">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-body">
                        <span className="text-gold-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Not Sure Which Service You Need?"
            className="mb-6"
          />
          <p className="text-body leading-relaxed mb-8">
            That&apos;s okay. You don&apos;t need to know exactly which mortgage solution is right for you
            before contacting us. Tell us what you&apos;re trying to achieve and we&apos;ll help you
            understand where to start.
          </p>
          <Button to="/contact">Talk To A Mortgage Advisor</Button>
        </div>
      </section>
    </>
  );
}
