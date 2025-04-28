"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-500 opacity-90 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
            <pattern 
              id="pattern" 
              width="100" 
              height="100" 
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="40" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Be the Change You Want to See
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your contribution, no matter the size, helps us continue our vital work. 
              Join our community of supporters making a difference around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-6 text-lg">
                Donate Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Other Ways to Help
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;