import { motion } from "framer-motion";
import { PageHero } from "../components/ui/SectionHeading";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/ui/CTABanner";
import { StepCard, FAQItem } from "../components/ui/Cards";
import { useState } from "react";
import { HERO_IMAGE } from "../data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const journeySteps = [
  {
    number: "01",
    title: "Understand Your Position",
    description:
      "We'll help you understand the key factors that can influence your potential mortgage affordability.",
  },
  {
    number: "02",
    title: "Explore Your Options",
    description:
      "We'll explain the mortgage options that may be available based on your circumstances.",
  },
  {
    number: "03",
    title: "Get Prepared",
    description:
      "Understand the information and documentation you may need for your mortgage application.",
  },
  {
    number: "04",
    title: "Apply",
    description:
      "Once you're ready, we'll guide you through the application process.",
  },
  {
    number: "05",
    title: "Move Toward Your New Home",
    description:
      "We'll help you understand the next stages of the process as your mortgage progresses.",
  },
];

const questions = [
  {
    question: "How much deposit do I need?",
    answer:
      "Deposit requirements vary depending on the mortgage product, property, lender, and your circumstances.",
  },
  {
    question: "How much can I afford?",
    answer:
      "Affordability depends on factors such as income, expenses, existing debts, credit history, deposit, and lender criteria.",
  },
  {
    question: "What is a mortgage pre-approval?",
    answer:
      "It is an initial indication of potential borrowing based on information provided to a lender. It is not a guarantee of final mortgage approval.",
  },
  {
    question: "What documents will I need?",
    answer:
      "Requirements vary, but lenders may request information relating to identity, income, employment, bank accounts, expenses, and other financial circumstances.",
  },
];

export default function FirstTimeBuyersPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <PageHero
        label="First-Time Home Buyers"
        title="Your First Home. Your Next Chapter."
        description="Buying your first home is exciting. But it can also feel overwhelming. How much can you afford? How much deposit do you need? What mortgage should you choose? You don't have to figure it all out alone."
        image={HERO_IMAGE}
      />

      <section className="py-20 bg-page">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="text-body leading-relaxed">
              Turtle Shell Mortgage Partners can help you understand the mortgage journey and prepare
              for the next step.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Your Journey"
            title="Your First-Time Buyer Journey"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {journeySteps.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <StepCard {...step} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-page">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Common Questions"
            title="Common First-Time Buyer Questions"
            className="mb-10"
          />
          <div>
            {questions.map((item, i) => (
              <FAQItem
                key={item.question}
                {...item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready To Start?"
        description="Your First Home Starts With A Conversation."
        primaryText="Get Started"
        primaryTo="/contact"
      />
    </>
  );
}
