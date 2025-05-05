// components/CoreValuesSection.js
"use client";
import { motion } from "framer-motion";

const values = [
  {
    title: "Built in the USA",
    description:
      "All ShopSabre CNC machines are built at our Lakeville, Minnesota facility — ensuring world-class American quality and craftsmanship.",
  },
  {
    title: "Customer-Driven Design",
    description:
      "We constantly evolve based on customer feedback to ensure our machines solve real-world fabrication challenges.",
  },
  {
    title: "Precision Meets Power",
    description:
      "Our engineering blends high-end motion systems with industrial rigidity for unmatched performance.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
