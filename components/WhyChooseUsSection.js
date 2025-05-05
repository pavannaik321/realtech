// components/WhyChooseUsSection.js
"use client";
import { motion } from "framer-motion";

const reasons = [
  "Over 20 years of proven CNC expertise.",
  "Used by professionals in 40+ countries.",
  "Industry-leading support and training.",
  "Trusted across aerospace, fabrication, woodworking, and more.",
  "Affordable precision — high performance without overpriced markups.",
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Why Choose ShopSabre?
        </motion.h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="text-left text-gray-700 mt-8 space-y-4"
        >
          {reasons.map((reason, index) => (
            <motion.li
              key={index}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="flex items-start gap-2"
            >
              <span className="text-green-600 text-lg mt-1">✔</span>
              <p>{reason}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
