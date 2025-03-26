import Image from "next/image";

export default function ConsultationSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div 
      className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden"
      style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.15)" }}    
      >
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/mis_images/contact.png" // Replace with actual image path
            alt="Consultation"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <h2 className="text-2xl font-bold">QUESTIONS?</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Not sure which machine is right for you and your production?
            Schedule a free consultation with one of our in-house experts for
            personalized, one-on-one guidance.
          </p>

          {/* Button Link */}
          <a
            href="#consultation"
            className="mt-5 inline-flex items-center text-blue-600 font-medium hover:underline"
          >
            Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
