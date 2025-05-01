// pages/about.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle, Globe, Trophy, Users, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
                Empowering Innovation with CNC Excellence
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At RealTech, we are passionate about crafting cutting-edge CNC machines that transform industries worldwide. With over two decades of engineering brilliance and a legacy of delivering 10,000+ machines to 40+ countries, we redefine precision, durability, and performance.
              </p>
              <a
                href="/#quote"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md"
              >
                Get a Free Quote →
              </a>
            </div>

            {/* Image */}
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/cnc-router.jpeg" // 👉 You can change to your image
                alt="CNC Machine RealTech"
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-xl"
              />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="100">
         <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Mission</h3>
        <p>To empower industries with innovative CNC technologies that enhance efficiency, accuracy, and profitability.</p>
        </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl shadow hover:shadow-xl transition-all border border-gray-200 bg-gradient-to-tr from-white to-gray-50"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
       
      </main>
      <Footer />
    </>
  );
}

// Features list (with Lucide icons)
const features = [
  {
    title: "20+ Years Expertise",
    description: "Our deep industry knowledge ensures you get cutting-edge, reliable CNC solutions.",
    icon: Trophy,
  },
  {
    title: "10,000+ Machines Delivered",
    description: "Thousands of businesses globally trust RealTech for precision and performance.",
    icon: CheckCircle,
  },
  {
    title: "Global Presence",
    description: "Serving clients in 40+ countries with robust support and fast delivery.",
    icon: Globe,
  },
  {
    title: "Custom Consultation",
    description: "Our expert team tailors solutions to fit your unique manufacturing needs.",
    icon: Users,
  },
  {
    title: "Advanced Technology",
    description: "We innovate with CNC Routers, Lasers, and Plasma systems that lead the industry.",
    icon: Wrench,
  },
  {
    title: "Dedicated Support",
    description: "Seamless after-sales service to maximize uptime and ensure satisfaction.",
    icon: CheckCircle,
  },
];
