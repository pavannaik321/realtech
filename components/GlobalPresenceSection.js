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
        <h2 className="text-3xl font-bold mb-6">Our Reach</h2>
<p className="text-lg text-gray-700">
  With over 100 machines delivered across Tamil Nadu, Real Tech empowers manufacturers with advanced CNC, UPVC, and Laser solutions. Our dedicated support and service ensure reliability and precision for every customer we serve.
</p>
      </motion.div>
    </section>
  );
}
