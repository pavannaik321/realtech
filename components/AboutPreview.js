// components/AboutPreview.js
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16" data-aos="fade-up">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Who We Are</h2>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
      RealTech CNC is dedicated to delivering high-performance CNC machines and precision solutions. Learn about our mission, vision, and commitment to innovation.
    </p>
    <Link href="/about">
      <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition shadow-lg hover:shadow-xl" data-aos="zoom-in" data-aos-delay="400">
        Learn More About Us
      </button>
    </Link>
  </div>
</section>
  );
}
