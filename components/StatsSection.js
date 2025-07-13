"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "CNC machines manufactured", value: 10000, suffix: "+" },
  { label: "Customers in 40+ countries and counting", value: 40, suffix: "+" },
  { label: "20+ years in business as an industry leader", value: 20, suffix: "+" },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        REALTECH BY THE NUMBERS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Animated Number (Only starts when visible) */}
            <CountUpNumber end={stat.value} suffix={stat.suffix} />

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// CountUp Component with Visibility Check
function CountUpNumber({ end, suffix }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // Approximate frames per second

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
      className="text-4xl md:text-6xl font-bold"
      animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      transition={{ duration: 0.3 }}
    >
      {count}
      {suffix}
    </motion.h3>
  );
}
