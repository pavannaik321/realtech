// components/CoreValuesSection.js
"use client";
import { motion } from "framer-motion";

const values = [
  {
    title: "Market Research",
    description:
      "We have delivered more than 100 machines across Tamil Nadu, establishing deep market understanding and customer trust.",
  },
  {
    title: "Proposal Reviews",
    description:
      "We offer customized machine sizes tailored to meet each customer’s specific requirements, ensuring optimal fit and performance.",
  },
  {
    title: "Tech Support",
    description:
      "Our dedicated support includes phone assistance, online training, and friendly technical guidance to keep your machines running smoothly.",
  }
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
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
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
