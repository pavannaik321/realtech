"use client";
import { motion } from "framer-motion";
import { Eye } from "lucide-react"; // Eye icon for vision symbolism

export default function VisionSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 px-6 md:px-20 overflow-hidden">
      {/* Abstract blurred background icon */}
      <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] bg-green-100 opacity-20 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
  <span className="font-semibold text-gray-800"> Our vision</span>, is to revolutionize the manufacturing industry by providing high-quality, precision-driven machinery that combines <span className="text-green-600 font-medium">innovation, strength, and reliability</span>. At Real Tech, we deliver cutting-edge solutions designed to make your projects come to life with unmatched accuracy and ease. 
  <br /> <br />
   
</p>
        </motion.div>

        {/* Right side - icon and accent */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <div className="bg-white border-2 border-green-200 p-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            <Eye className="w-20 h-20 text-green-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
