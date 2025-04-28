"use client";

import { motion } from "framer-motion";
import { Briefcase, Heart, Globe } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              At NewAims, we envision a world where socio-economic development, women's empowerment,
              free legal support, health awareness, and agro-economic growth are accessible to all.
              Through community-driven initiatives, we build sustainable and inclusive futures.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionCard
            icon={<Heart className="w-12 h-12 text-primary-500" />}
            title="Our Purpose"
            description="To empower communities by addressing challenges through legal assistance, health programs, women's welfare, business support, and sustainable agriculture."
            delay={0}
          />
          <MissionCard
            icon={<Globe className="w-12 h-12 text-primary-500" />}
            title="Our Vision"
            description="A future where all individuals have equitable access to opportunities, legal rights, healthcare, and resources needed for sustainable growth and empowerment."
            delay={0.2}
          />
          <MissionCard
            icon={<Briefcase className="w-12 h-12 text-primary-500" />}
            title="Our Approach"
            description="We collaborate with local communities, leveraging grassroots knowledge and global expertise to create solutions that are impactful, scalable, and community-driven."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

interface MissionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const MissionCard = ({ icon, title, description, delay }: MissionCardProps) => (
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

export default Mission;
