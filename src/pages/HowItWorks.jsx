import { motion } from "framer-motion";
import { PageHero } from "../components/ui/SectionHeading";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/ui/CTABanner";
import { HERO_IMAGE } from "../data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const steps = [
  {
    step: "Step 1",
    title: "Let's Talk",
    description:
      "Start with a conversation about your plans. We'll learn about your property goals, financial circumstances, and what you're hoping to achieve.",
  },
  {
    step: "Step 2",
    title: "Understand Your Options",
    description:
      "We'll help you understand the mortgage options that may be available based on your circumstances. We'll explain the important details so you can make an informed decision.",
  },
  {
    step: "Step 3",
    title: "Prepare Your Application",
    description:
      "Once you've decided how you'd like to proceed, we'll guide you through the information and documentation required for the application.",
  },
  {
    step: "Step 4",
    title: "Move Forward",
    description:
      "Your application will go through the relevant lender assessment and approval process. We'll help you understand what happens next and keep you informed throughout the journey.",
  },
  {
    step: "Step 5",
    title: "Your Next Chapter",
    description:
      "Once the necessary requirements are completed and your mortgage is finalized, you're ready to move forward with your property plans.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        label="How It Works"
        title="A Clearer Way To Navigate Your Mortgage"
        description="The mortgage process can seem complicated. Our job is to help make it easier to understand."
        image={HERO_IMAGE}
      />

      <section className="py-20 bg-page">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 pb-12 relative"
              >
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gold-400/30" />
                )}
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 z-10">
                  <span className="text-navy-950 font-bold text-sm">{i + 1}</span>
                </div>
                <div className="pt-1">
                  <p className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    {item.step}
                  </p>
                  <h3 className="text-xl font-bold text-heading mb-2">{item.title}</h3>
                  <p className="text-body leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-band">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <SectionHeading
              title="Simple. Personal. Clear."
              light
              className="mb-6"
            />
            <p className="text-band-muted leading-relaxed mb-4">
              You don&apos;t have to navigate the mortgage process alone.
            </p>
            <p className="text-gold-400 font-semibold uppercase tracking-wide">
              Turtle Shell Mortgage Partners
            </p>
            <p className="text-band-muted text-sm mt-2">Your Destiny, By Your Own Design.</p>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Start Your Mortgage Journey"
        primaryText="Start Your Mortgage Journey"
        primaryTo="/contact"
      />
    </>
  );
}
