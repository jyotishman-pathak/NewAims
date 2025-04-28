"use client";

import { motion } from "framer-motion";

const Donate = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Make a Difference Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Your generous donation supports our efforts to empower communities, improve healthcare, provide education, and help build sustainable futures.
          </motion.p>
        </div>

        {/* Donation Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <DonationCard
            title="One-Time Donation"
            description="Make a one-time donation and make an immediate impact. Your support is crucial to the success of our programs."
            amount="₹ 200"
            delay={0}
          />
          <DonationCard
            title="Monthly Donation"
            description="Join our community of regular supporters and help fund sustainable, long-term projects with a monthly contribution."
            amount="₹ 500 / month"
            delay={0.2}
          />
          <DonationCard
            title="Custom Donation"
            description="Choose the amount you would like to donate and support the cause in the way that suits you best."
            amount="Choose Your Amount"
            delay={0.4}
          />
        </div>

        {/* Donation Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md"
        >
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Donation Amount</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Donate Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface DonationCardProps {
  title: string;
  description: string;
  amount: string;
  delay: number;
}

const DonationCard = ({
  title,
  description,
  amount,
  delay,
}: DonationCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-all duration-300"
  >
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="text-primary-500 font-semibold text-2xl">{amount}</div>
  </motion.div>
);

export default Donate;
