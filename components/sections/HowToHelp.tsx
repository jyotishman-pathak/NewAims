"use client";

import { motion } from "framer-motion";
import { Heart, Users, HandshakeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const helpOptions = [
  {
    title: "Donate",
    icon: <Heart className="h-12 w-12" />,
    description: "Your financial support directly funds our programs and initiatives around the world. Every contribution makes a difference.",
    cta: "Donate Now",
    href: "/donate",
    color: "bg-primary-500 hover:bg-primary-600",
    delay: 0,
  },
  {
    title: "Volunteer",
    icon: <Users className="h-12 w-12" />,
    description: "Share your time and skills to help us make a greater impact. Volunteer opportunities are available locally and globally.",
    cta: "Get Involved",
    href: "/volunteer",
    color: "bg-blue-500 hover:bg-blue-600",
    delay: 0.2,
  },
  {
    title: "Partner",
    icon: <HandshakeIcon className="h-12 w-12" />,
    description: "Join forces with us through corporate partnerships, institutional collaborations, or community initiatives.",
    cta: "Become a Partner",
    href: "/partner",
    color: "bg-emerald-500 hover:bg-emerald-600",
    delay: 0.4,
  },
];

const HowToHelp = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How You Can Help</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Join our community of changemakers working to create a better world.
            There are many ways to contribute based on your interests and capacity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpOptions.map((option, index) => (
            <HelpCard key={index} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface HelpCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  cta: string;
  href: string;
  color: string;
  delay: number;
}

const HelpCard = ({ title, icon, description, cta, href, color, delay }: HelpCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="p-8">
        <div className="mb-4 flex justify-center">
          <div className="p-4 rounded-full bg-gray-100 text-primary-500">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 text-center">{description}</p>
      </div>
      <div className="px-8 pb-8">
        <Button 
          className={cn("w-full", color)}
        >
          {cta}
        </Button>
      </div>
    </motion.div>
  );
};

export default HowToHelp;