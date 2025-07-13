"use client";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-gray-100 py-20 px-6 md:px-20 overflow-hidden">
      {/* Decorative background blur element */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-green-300 opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
            Our Mission
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-green-400 rounded"></span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At Real Tech, our mission is to provide <strong>best-in-class CNC solutions</strong> that empower creators, fabricators, and manufacturers to bring their ideas to life 
            with unmatched reliability, efficiency, and precision. Through continuous innovation, we ensure our products incorporate the latest technological advancements, 
            delivering tools that help our customers stay ahead in their projects.<strong>All type of CNC Machine can be import or Export Services Available. </strong> 
            <br /><br />
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg w-[90%] md:w-[100%]">
            <Image
              src="/product_images/image4.jpg"
              alt="Our Mission CNC"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
