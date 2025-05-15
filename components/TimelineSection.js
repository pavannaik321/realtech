"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2017",
    event: "Company Established — Real Tech was established in Vaniyambadi, Tamil Nadu as a manufacturer and service provider of CNC Router Machines, Servo CNC Router Machines, Laser Machines, and UPVC Machines."
  },

  {
    year: "2019",
    event: "Customization & Innovation — Introduced customized size machines as per customer requirements, integrating latest technological advancements into every product."
  },
  {
    year: "2021",
    event: "Enhanced Services & Support — Expanded service offerings with phone support, online training, and friendly technical assistance to customers."
  },
  {
    year: "2023",
    event: "13 Years of Experience — With deep technical knowledge and updated expertise, Real Tech solidified its reputation as a well-known CNC solutions provider."
  },
  {
    year: "2024",
    event: "Continued Excellence — Strengthened our footprint in Tamil Nadu and expanded innovative solutions, further enhancing customer satisfaction and machine performance."
  },
  {
    year: "2025",
    event: "Empowering the Future of Manufacturing — Our vision is to revolutionize manufacturing by delivering high-quality, reliable, and precision-driven CNC solutions that combine innovation, strength, and ease of use — helping creators bring their ideas to life effortlessly."
  }
];



export default function TimelineSection() {
  return (
    <section className="py-24 bg-gray-50 px-6 md:px-20">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-16">
        Our Journey
      </h2>

      <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-1 before:h-full before:bg-green-300 before:transform before:-translate-x-1/2">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.10 }}
            className={`relative mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full z-10 border-4 border-white shadow-lg" />

            {/* Card */}
            <div className={`md:w-1/2 p-6 bg-white rounded-xl shadow-lg z-20 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
              <h3 className="text-green-600 text-xl font-bold mb-2">{item.year}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
