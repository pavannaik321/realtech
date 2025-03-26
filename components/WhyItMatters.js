// components/WhyItMatters.js
export default function WhyItMatters() {
    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900">Why This Matters?</h2>
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

            <div className="mt-16 flex justify-center overflow-x-auto whitespace-nowrap gap-8 px-4">
                <img data-aos="flip-left" src="/images/baby_images/baby1.png" alt="Baby 1" className="w-20 h-12 md:flex md:h-20" />
                <img data-aos="flip-left" src="/images/baby_images/baby2.png" alt="Baby 2" className="w-12 h-12 md:w-20 md:h-20" />
                <img data-aos="flip-left" src="/images/baby_images/baby3.png" alt="Baby 3" className="w-12 h-12 md:w-20 md:h-20" />
                <img data-aos="flip-left" src="/images/baby_images/baby4.png" alt="Baby 4" className="w-12 h-12 md:w-20 md:h-20" />

                {/* Hidden on mobile, visible on medium screens and up */}
                <img data-aos="flip-left" src="/images/baby_images/baby5.png" alt="Baby 5" className="w-12 h-12 md:w-20 md:h-20 hidden md:block" />
                <img data-aos="flip-left" src="/images/baby_images/baby6.png" alt="Baby 6" className="w-12 h-12 md:w-20 md:h-20 hidden md:block" />
                <img data-aos="flip-left" src="/images/baby_images/baby7.png" alt="Baby 7" className="w-12 h-12 md:w-20 md:h-20 hidden md:block" />
                <img data-aos="flip-left" src="/images/baby_images/baby8.png" alt="Baby 8" className="w-12 h-12 md:w-20 md:h-20 hidden md:block" />
            </div>

        </section>
    );
}
