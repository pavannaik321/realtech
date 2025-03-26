// components/Services.js
export default function Services() {
    return (
      <section
        className="relative py-16 px-8 "
        style={{
          backgroundImage: "url('images/Mask_group2.png')", // Replace with actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left: Pregnant Woman Illustration */}
          <div data-aos="zoom-in" className="md:w-1/2 flex justify-center">
            <img 
              src="/images/service_image.png" 
              alt="Pregnant Woman"
              className="w-64 h-auto"
            />
          </div>
  
          {/* Right: Services Content */}
          <div className="md:w-1/2 bg-white p-6 rounded-2xl shadow-lg">
            <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-900">Services We Offer</h2>
            <p data-aos="fade-up" className="mt-4 text-gray-600">
              Our trained caretakers (nursing diploma holders) provide personalized support to ensure a smooth and stress-free pregnancy journey.
            </p>
            <ul className="mt-6 space-y-4">
              <li data-aos="fade-up">
                <strong className="text-gray-900">Physical Assistance –</strong> Helping with daily movements, providing light exercise guidance, and ensuring overall comfort.
              </li>
              <li data-aos="fade-up">
                <strong className="text-gray-900">Emotional Well-being –</strong> Offering companionship, relaxation techniques, and mental support to reduce stress.
              </li>
              <li data-aos="fade-up">
                <strong className="text-gray-900">Basic Medical Care –</strong> Monitoring vitals, recognizing warning signs, and ensuring timely medical attention if needed.
              </li>
              <li data-aos="fade-up">
                <strong className="text-gray-900">Post-Delivery Support (Future Expansion) –</strong> Helping new mothers with recovery, baby care, and emotional adjustment.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  