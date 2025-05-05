"use client";
import { motion } from "framer-motion";

export default function CustomerSupportSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Dedicated Support, Always</h2>
        <p className="text-gray-700 text-lg">
          We don’t just sell machines — we build relationships. Our in-house U.S. based support ensures you get real-time help from real people.
        </p>
      </motion.div>
    </section>
  );
}
