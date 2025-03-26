
export default function WhyItStarted() {
    return (
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">Why it Started?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div data-aos="flip-left" className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="/images/why-this-matter1.jpeg" alt="Early Pregnancy" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-4">Early Pregnancy</h3>
            <p className="text-gray-600 text-sm mt-2">
              The first few months can be tough with nausea, fatigue, and mood swings. Proper rest, hydration, and nutrition are crucial for both the mother and baby.
            </p>
          </div>
          <div data-aos="fade-up" className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="/images/why-this-matter2.jpg" alt="Mid Pregnancy" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-4">Mid-Pregnancy</h3>
            <p className="text-gray-600 text-sm mt-2">
              As the body changes, mothers need gentle mobility support, relaxation techniques, and emotional well-being to stay active and stress-free.
            </p>
          </div>
          <div data-aos="flip-left" className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="/images/why-this-matter3.jpeg" alt="Final Months" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-4">Final Months</h3>
            <p className="text-gray-600 text-sm mt-2">
              The last trimester demands physical assistance, mental preparedness, and emotional care, helping mothers feel ready and confident for childbirth.
            </p>
          </div>
        </div>
      </section>
    );
  }
  