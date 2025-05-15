"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      className="relative h-[90vh] bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url(/product_images/image1.png)" }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Animated Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-yellow-300/20 to-transparent z-20"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-30 text-center max-w-4xl px-4"
      >
        <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl border border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
  Sculpting Elegance from wood
</h1>
<h2 className="text-3xl md:text-4xl font-bold text-white leading-snug tracking-tight drop-shadow-lg mt-2">
  Strength from technology
</h2>

          <p className="mt-4 text-lg md:text-xl text-green-300 font-medium drop-shadow">
             Delivering Innovation, Quality & Dependability since day one.
          </p>
        </div>
      </motion.div>

      {/* Parallax Decorative Glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-12 left-12 w-56 h-56 bg-green-500/30 blur-3xl rounded-full z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-12 right-12 w-56 h-56 bg-yellow-400/30 blur-3xl rounded-full z-0"
      />
    </section>
  );
}
