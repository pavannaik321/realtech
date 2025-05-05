"use client";
import { motion } from "framer-motion";

export default function GlobalPresenceSection() {
  return (
    <section className="py-20 bg-gray-100 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Global Reach</h2>
        <p className="text-lg text-gray-700">
          With clients in 40+ countries, ShopSabre delivers world-class CNC technology across borders. Our global network ensures you get expert support, no matter where you are.
        </p>
      </motion.div>
    </section>
  );
}
