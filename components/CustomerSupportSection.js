"use client";
import { motion } from "framer-motion";

export default function CustomerSupportSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Reliable Support, Always</h2>
<p className="text-gray-700 text-lg">
  At Real Tech, we don’t just deliver machines — we ensure lasting partnerships. Our team offers dedicated phone support, online training, and friendly technical assistance to keep your operations running smoothly.
</p>
      </motion.div>
    </section>
  );
}
