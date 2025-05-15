"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative bg-white px-6 md:px-20 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6"
      >
        We’d Love to Hear From You
      </motion.h1>
      <p className="text-center text-gray-600 text-lg">
        Questions, feedback, or support? Reach out — we’re here to help and collaborate.
      </p>
    </section>
  );
}
