import { motion } from "framer-motion";
import { Handshake, Shield, Users, Building2 } from "lucide-react";
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

const partnerTypes = [
  {
    icon: Building2,
    title: "Real Estate Professionals",
    description:
      "Work with us to help your clients understand mortgage options and move toward closing with greater confidence.",
  },
  {
    icon: Users,
    title: "Referral Partners",
    description:
      "If you work with clients who need mortgage guidance, we welcome the opportunity to support them with clear, personal service.",
  },
  {
    icon: Shield,
    title: "Industry Partners",
    description:
      "We value long-term professional relationships built on trust, transparency, and a shared focus on client outcomes.",
  },
  {
    icon: Handshake,
    title: "Become a Partner",
    description:
      "Tell us about your business and how we can work together to support clients throughout their property journey.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        label="Partners"
        title="Let's Build Stronger Client Relationships"
        subtitle="Partnerships Built On Trust"
        description="Turtle Shell Mortgage Partners welcomes relationships with real estate professionals, referral partners, and industry colleagues who share our commitment to clear guidance and client-first service."
        image={HERO_IMAGE}
      />

      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Work With Us"
            title="Who We Partner With"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTypes.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-surface border border-line rounded-lg p-8"
              >
                <div className="w-14 h-14 rounded-full bg-navy-950 dark:bg-gold-400/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-heading font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested In Partnering?"
        description="Start a conversation with our team and let's explore how we can work together."
        primaryText="Let's Talk"
        primaryTo="/contact"
      />
    </>
  );
}
