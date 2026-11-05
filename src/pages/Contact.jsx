import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { HERO_IMAGE } from "../data/content";

const enquiryOptions = [
  "Buying a Home",
  "First-Time Buyer",
  "Refinancing",
  "Home Equity / HELOC",
  "Investment Property",
  "Commercial Mortgage",
  "Self-Employed Mortgage",
  "Alternative Financing",
  "General Enquiry",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Talk About Your Mortgage Goals"
        subtitle="Your Next Step Starts With A Conversation."
        description="Whether you're ready to apply for a mortgage or simply want to understand your options, we're here to help. Tell us a little about what you're looking for and a member of our team can get in touch with you."
        image={HERO_IMAGE}
      />

      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-heading mb-8">Contact Us</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                  { icon: Mail, label: "Email", value: "info@turtleshellmortgage.com" },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "123 Financial Way, Suite 100, Austin, TX 78701",
                  },
                  { icon: Clock, label: "Business Hours", value: "Mon – Fri: 9:00 AM – 5:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy-950 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-gold-400 text-xs font-semibold uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-heading mt-1">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-muted rounded-lg border border-line">
                <h3 className="text-heading font-bold text-lg mb-2">Prefer To Talk?</h3>
                <p className="text-body text-sm mb-4">
                  Book A Conversation With Our Team. Have questions about your mortgage options?
                  Let&apos;s talk.
                </p>
                <Button to="/contact">Book A Consultation</Button>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-heading mb-8">Send Us A Message</h2>
              {submitted ? (
                <div className="bg-muted border border-line rounded-lg p-8 text-center">
                  <p className="text-heading font-semibold text-lg mb-2">Thank You!</p>
                  <p className="text-body text-sm">
                    Your enquiry has been received. A member of our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="field"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="field"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="enquiry" className="label">
                      What Can We Help You With?
                    </label>
                    <select
                      id="enquiry"
                      name="enquiry"
                      required
                      value={formData.enquiry}
                      onChange={handleChange}
                      className="field"
                    >
                      <option value="">Select an option</option>
                      {enquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="label">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="field resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Enquiry
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-band text-center">
        <p className="text-gold-400 font-semibold uppercase tracking-wide">
          Turtle Shell Mortgage Partners
        </p>
        <p className="text-band-muted text-sm mt-2">Your Destiny, By Your Own Design.</p>
      </section>
    </>
  );
}
