import { useState } from "react";
import { PageHero } from "../components/ui/SectionHeading";
import { CTASection } from "../components/ui/CTABanner";
import { FAQItem } from "../components/ui/Cards";
import { faqItems, HERO_IMAGE } from "../data/content";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Mortgage Questions, Clearly Answered."
        image={HERO_IMAGE}
      />

      <section className="py-20 bg-page">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqItems.map((item, i) => (
            <FAQItem
              key={item.question}
              {...item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="We're happy to help."
        primaryText="Speak With A Mortgage Advisor"
        primaryTo="/contact"
      />
    </>
  );
}
