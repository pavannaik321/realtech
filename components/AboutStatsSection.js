"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "CNC Machines Manufactured", value: 10000, suffix: "+" },
  { label: "Customers in 40+ Countries", value: 40, suffix: "+" },
  { label: "Years of Innovation", value: 20, suffix: "+" },
];

export default function AboutStatsSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 to-white py-20 px-6 md:px-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          By the Numbers
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Proven performance, global trust, and a legacy of innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md shadow-lg border border-gray-200 rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <CountUpNumber end={stat.value} suffix={stat.suffix} />
            <p className="text-gray-700 mt-4 text-lg font-medium text-center">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CountUpNumber({ end, suffix }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <motion.h3
      ref={ref}
      className="text-5xl md:text-6xl font-bold text-green-600"
      animate={{ opacity: [0, 1], scale: [0.95, 1] }}
      transition={{ duration: 0.8 }}
    >
      {count}{suffix}
    </motion.h3>
  );
}
