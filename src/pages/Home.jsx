import { motion } from "framer-motion";
import { Home, RefreshCw, TrendingUp, Key, Shield, BarChart3, UserCheck } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CTABanner, CTASection } from "../components/ui/CTABanner";
import { ServiceCard, GoalCard, FeatureItem, StepCard, ValueCard } from "../components/ui/Cards";
import {
  FAMILY_IMAGE,
  HERO_VIDEO,
  homeGoals,
  whyChooseFeatures,
  howItWorksSteps,
  mortgageSolutions,
  turtleValues,
} from "../data/content";

const iconMap = { Home, Key, RefreshCw, TrendingUp };

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em] mb-5">
                Turtle Shell Mortgage Partners
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.12] tracking-tight">
                <span className="block text-heading">Build Your Future.</span>
                <span className="block text-accent">Own Your Dream.</span>
              </h1>
              <p className="text-gold-500 text-sm font-semibold uppercase tracking-[0.18em] mt-5">
                Mortgage solutions designed around you.
              </p>
              <p className="text-body text-base md:text-lg mt-5 leading-relaxed max-w-xl">
                Mortgage solutions designed around your goals. Buying a home is one of the biggest
                financial decisions you&apos;ll make — we help make the process easier to understand
                and easier to navigate.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/contact" size="lg">
                  Let&apos;s Talk
                </Button>
                <Button to="/how-it-works" variant="secondary" size="lg">
                  How It Works
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-2xl bg-accent/20 blur-md" />
              <div className="relative rounded-2xl overflow-hidden border border-line shadow-2xl aspect-[16/10] bg-navy-950">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
                >
                  <source src={HERO_VIDEO} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Get Started"
            title="What Are You Looking To Do?"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeGoals.map((goal, i) => {
              const Icon = iconMap[goal.icon];
              return (
                <motion.div key={goal.title} {...fadeUp} transition={{ delay: i * 0.1 }}>
                  <GoalCard
                    icon={Icon}
                    title={goal.title}
                    description={goal.description}
                    to={goal.link}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <SectionHeading
              label="Mortgage Guidance Made Simple"
              title="A Mortgage Doesn't Have To Be Complicated"
            />
            <div className="mt-8 space-y-4 text-body leading-relaxed">
              <p>
                There are many mortgage options, requirements, rates, terms, and documents to
                understand. It can quickly become overwhelming.
              </p>
              <p>That&apos;s where Turtle Shell Mortgage Partners comes in.</p>
              <p>
                We take the time to understand your goals, explain your options clearly, and guide
                you through the mortgage journey from your first conversation to the next step.
              </p>
              <p className="text-heading font-bold text-lg pt-4">
                Clear Advice. Personal Service. Confident Decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Mortgage Solutions Designed For You"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={Home}
              title="Home Purchase Loans"
              description="Make your dream home a reality with competitive rates and flexible terms tailored to your needs."
            />
            <ServiceCard
              icon={RefreshCw}
              title="Refinance Solutions"
              description="Lower your monthly payments and save more with refinancing options aligned to your current goals."
            />
            <ServiceCard
              icon={BarChart3}
              title="Investment Property Loans"
              description="Grow your wealth with smart financing for your investment properties."
            />
            <ServiceCard
              icon={UserCheck}
              title="Personalized Guidance"
              description="Expert advice every step of the way to help you make confident decisions."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} className="relative">
              <img
                src={FAMILY_IMAGE}
                alt="Family reviewing mortgage options"
                className="rounded-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-4 md:right-6 bg-footer border border-gold-400/20 rounded-lg p-5 shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-gold-400" />
                  <p className="text-band-text text-sm font-semibold">
                    Trusted. Transparent. Customer Focused.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-band-text mb-4">
                Your Goals, Our Priority
              </h2>
              <p className="text-band-muted mb-8 leading-relaxed">
                Why Choose Turtle Shell Mortgage Partners? We believe every client deserves
                personalized guidance, clear communication, and support throughout their mortgage
                journey.
              </p>
              <div className="space-y-5">
                {whyChooseFeatures.slice(0, 3).map((feature) => (
                  <FeatureItem key={feature.title} {...feature} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="How It Works" title="A Clear Path Forward" className="mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <StepCard {...step} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Solutions"
            title="Mortgage Solutions For Every Stage"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mortgageSolutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="bg-surface rounded-lg p-6 shadow-sm border border-line"
              >
                <h3 className="text-heading font-bold mb-2">{solution.title}</h3>
                <p className="text-body text-sm leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Turtle Shell?"
            title="Protection. Stability. Confidence."
            light
            className="mb-6"
          />
          <p className="text-band-muted text-center max-w-2xl mx-auto mb-14 leading-relaxed">
            A turtle&apos;s shell represents protection and security. Those values are at the heart of
            our approach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {turtleValues.map((value, i) => (
              <motion.div key={value.title} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <ValueCard icon={Shield} {...value} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <CTASection
        title="Ready To Take The Next Step?"
        description="You don't need to have everything figured out before you contact us. Tell us what you're looking to achieve, and let's explore your mortgage options together."
        primaryText="Get Started"
        secondaryText="Book A Consultation"
        primaryTo="/contact"
        secondaryTo="/contact"
      />
    </>
  );
}
