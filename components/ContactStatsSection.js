"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Machines Delivered in Tamil Nadu", value: 100 },
  { label: "Customized Machine Sizes Offered", value: 50 },
  { label: "Years of Technical Experience", value: 13 }
];

export default function ContactStatsSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Trusted by Thousands</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="text-4xl font-bold"
          >
            {stat.value.toLocaleString()}
            <p className="text-base text-gray-600 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
