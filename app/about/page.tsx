"use client";

import { motion } from "framer-motion";
import { Handshake, HeartPulse, BookOpenCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About NewAims
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We are dedicated to empowering communities through socio-economic development, free legal aid,
            women welfare, health initiatives, business guidance, and agricultural growth.
          </motion.p>
        </div>

        {/* About Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutCard
            icon={<Handshake className="w-12 h-12 text-primary-500" />}
            title="Who We Are"
            description="NewAims is a non-profit organization committed to creating lasting impact by working directly with communities, respecting local cultures, and driving sustainable development."
            delay={0}
          />
          <AboutCard
            icon={<HeartPulse className="w-12 h-12 text-primary-500" />}
            title="What We Do"
            description="From free legal counseling to women empowerment, health awareness, business mentorship, and agro-economic upliftment — we address the most pressing challenges communities face."
            delay={0.2}
          />
          <AboutCard
            icon={<BookOpenCheck className="w-12 h-12 text-primary-500" />}
            title="Our Commitment"
            description="We are committed to transparency, collaboration, and innovation in all our initiatives, ensuring every action contributes meaningfully to the well-being of the people we serve."
            delay={0.4}
          />
        </div>

        {/* Our Values Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            Our Core Values
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            Integrity, Empowerment, Inclusivity, Sustainability, and Respect form the foundation of every
            project we undertake.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const AboutCard = ({ icon, title, description, delay }: AboutCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-all duration-300"
  >
    <div className="inline-block mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default AboutUs;
