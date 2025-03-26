// components/Hero.js
export default function Hero() {
    return (
      <section data-aos="fade-right"  className="flex flex-col items-start py-16 px-6 md:pl-36 bg-gray-50">
        {/* Logo & Title Container */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/Logo.png" // ✅ Replace with actual logo path
            alt="Cradle Wing Logo"
            className="w-10 h-12"
          />
          <h1 className="text-4xl font-bold text-gray-900">Cradle Wing</h1>
        </div>
  
        {/* Description */}
        <p  className="mt-4 text-lg text-gray-600 max-w-2xl">
          Pregnancy brings physical and emotional challenges, and our trained caretakers are here to help. 
          From physical assistance and emotional support to basic medical care, we ensure expecting mothers 
          feel safe, comfortable, and stress-free throughout every stage of pregnancy.
        </p>
  
        {/* Call to Action Button */}
        <a href="#contact-us">
        <button className="mt-6 px-6 py-3 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-700 transition">
          Connect With Us
        </button>
      </a>
      </section>
    );
  }
  