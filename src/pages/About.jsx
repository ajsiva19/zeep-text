import { motion } from "framer-motion";
import { Shield, Ear, MessageSquare, Target, Compass } from "lucide-react";
import { PageHero } from "../components/ui/SectionHeading";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/ui/CTABanner";
import { ValueCard } from "../components/ui/Cards";
import { HERO_IMAGE } from "../data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const values = [
  {
    title: "Protection",
    description: "Helping you understand your mortgage options and make informed decisions.",
  },
  {
    title: "Stability",
    description: "Taking a thoughtful approach to your financial and property goals.",
  },
  {
    title: "Strength",
    description: "Helping you move forward with a clear understanding of your financing options.",
  },
  {
    title: "Confidence",
    description: "Giving you the knowledge and guidance you need throughout your mortgage journey.",
  },
];

const approach = [
  {
    icon: Ear,
    title: "We Listen First",
    description:
      "Before discussing mortgage options, we want to understand your situation, your goals, and what you're trying to achieve.",
  },
  {
    icon: MessageSquare,
    title: "We Explain Clearly",
    description:
      "We believe you should understand the mortgage you're considering. We'll explain the important details in straightforward language.",
  },
  {
    icon: Target,
    title: "We Focus On You",
    description:
      "There is no single mortgage solution that works for everyone. Your circumstances matter.",
  },
  {
    icon: Compass,
    title: "We Guide You Forward",
    description:
      "Once you understand your options, we'll help you navigate the next steps.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="About Turtle Shell Mortgage Partners"
        subtitle="Your Goals. Our Guidance. Your Future."
        description="At Turtle Shell Mortgage Partners, we believe getting a mortgage should be a clear and personal experience. A mortgage is more than a financial transaction — it's part of a much bigger decision about your home, your family, your investment, and your future."
        image={HERO_IMAGE}
      />

      <section className="py-20 bg-page">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="text-body leading-relaxed mb-6">
              That&apos;s why we take the time to understand our clients before helping them explore
              their mortgage options.
            </p>
            <p className="text-heading font-bold text-xl">
              Our approach is simple: Listen. Understand. Explain. Guide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeUp} className="bg-surface rounded-lg p-8 shadow-sm border border-line">
              <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Our Mission
              </p>
              <h3 className="text-2xl font-bold text-heading mb-4">
                Making Mortgage Financing Easier To Understand
              </h3>
              <p className="text-body leading-relaxed">
                Our mission is to provide personalized mortgage guidance that helps clients
                understand their options and make informed decisions.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="bg-surface rounded-lg p-8 shadow-sm border border-line">
              <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Our Vision
              </p>
              <h3 className="text-2xl font-bold text-heading mb-4">
                Building Long-Term Financial Relationships
              </h3>
              <p className="text-body leading-relaxed">
                We want to be more than a company you contact when you need a mortgage. We want to
                become a trusted partner throughout your property journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What Turtle Shell Represents"
            title="Protection. Stability. Strength."
            light
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={value.title} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <ValueCard icon={Shield} {...value} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Approach" title="How We Work With You" className="mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-lg border border-line hover:shadow-md transition-shadow bg-surface"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-navy-950" />
                </div>
                <div>
                  <h3 className="text-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <SectionHeading label="Our Commitment" title="Professional. Transparent. Personal." />
            <p className="text-body leading-relaxed mt-6">
              We are committed to providing professional, transparent, and personalized mortgage
              guidance. Our goal is simple: To help you make mortgage decisions with greater clarity
              and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Let's Start With A Conversation"
        description="Tell us about your goals and let's explore your mortgage options together."
        primaryText="Get Started"
        primaryTo="/contact"
      />
    </>
  );
}
