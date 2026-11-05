import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/ui/SectionHeading";
import { CTASection } from "../components/ui/CTABanner";
import { knowledgeArticles, HERO_IMAGE } from "../data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function KnowledgeHubPage() {
  return (
    <>
      <PageHero
        label="Knowledge Hub"
        title="Mortgage Knowledge Hub"
        subtitle="Mortgage Information Made Easier To Understand."
        description="Buying property and arranging a mortgage can come with a lot of questions. Our Knowledge Hub provides simple, useful information to help you understand mortgages, home buying, refinancing, property investment, and other topics."
        image={HERO_IMAGE}
      />

      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to="/contact"
                  className="group block bg-surface rounded-lg p-6 border border-line hover:shadow-lg hover:border-gold-400/30 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-navy-950 flex items-center justify-center mb-4 group-hover:bg-gradient-gold transition-colors">
                    <BookOpen className="w-5 h-5 text-gold-400 group-hover:text-navy-950 transition-colors" />
                  </div>
                  <h3 className="text-heading font-bold text-lg mb-2 group-hover:text-gold-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed mb-4">{article.description}</p>
                  <span className="inline-flex items-center gap-1 text-gold-500 text-sm font-semibold">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have A Question We Haven't Answered?"
        description="Contact our team and we'll help you understand where to start."
        primaryText="Ask A Question"
        primaryTo="/contact"
      />
    </>
  );
}
