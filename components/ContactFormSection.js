"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const inputStyle = "border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input className={inputStyle} placeholder="First Name" />
          <input className={inputStyle} placeholder="Last Name" />
          <input className={inputStyle + " md:col-span-2"} placeholder="Email Address" />
          <input className={inputStyle + " md:col-span-2"} placeholder="Phone Number" />
          <textarea className={inputStyle + " md:col-span-2"} placeholder="Message..." rows={4} />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition md:col-span-2">
            Submit Form →
          </button>
        </form>
      </motion.div>
    </section>
  );
}
