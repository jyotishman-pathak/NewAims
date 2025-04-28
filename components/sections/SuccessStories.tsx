"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Leaf } from "lucide-react";

const SuccessStories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Real people, real impact. Discover how NewAims is transforming lives across communities
            through legal support, economic empowerment, women's welfare, health initiatives, and agricultural growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StoryCard
            icon={<Users className="w-12 h-12 text-primary-500" />}
            title="Women's Empowerment"
            description="Over 500 women trained in business skills and supported to launch small enterprises, creating financial independence and stronger communities."
            delay={0}
          />
          <StoryCard
            icon={<Briefcase className="w-12 h-12 text-primary-500" />}
            title="Legal Aid for All"
            description="Provided free legal consultations to 1200+ marginalized individuals, securing justice and promoting legal literacy in underserved communities."
            delay={0.2}
          />
          <StoryCard
            icon={<Leaf className="w-12 h-12 text-primary-500" />}
            title="Agro-Economic Growth"
            description="Supported 300 farmers with modern techniques and resources, boosting crop yields and increasing rural incomes sustainably."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

interface StoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const StoryCard = ({ icon, title, description, delay }: StoryCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-lg text-center hover:shadow-md transition-all duration-300"
  >
    <div className="inline-block mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default SuccessStories;
