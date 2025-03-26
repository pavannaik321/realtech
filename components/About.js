import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-white py-16 px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center">
        <Image 
          src="/images/Mask-group.png" 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-100"
        />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 data-aos="fade-right" className="text-4xl font-bold text-gray-900">About Us</h2>
          <p data-aos="fade-right" className="mt-4 text-gray-600 leading-relaxed">
            We are a startup dedicated to supporting expecting mothers at any stage of pregnancy. 
            Currently, we are running a one-month trial program with trained caretakers (nursing diploma holders). 
            If successful, we will expand to train caretakers and offer personalized services for mothers.
          </p>
        </div>

        {/* Image Section */}
        <div data-aos="fade-left" className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image 
            src="/images/about_image.png" 
            alt="Mother and Child"
            width={400} 
            height={300} 
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
