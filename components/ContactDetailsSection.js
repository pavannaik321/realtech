"use client";

export default function ContactDetailsSection() {
  return (
    <section className="bg-white px-6 md:px-20 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Reach Out To Us</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-left">
        <div>
          <h3 className="font-semibold text-lg">Email Support</h3>
          <p className="text-gray-600">Our team responds in real time.</p>
          <a className="text-blue-600 mt-2 block" href="mailto:realtech@gmail.com">
            realtechvnb@gmail.com
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Visit Our Office</h3>
          <p className="text-gray-600">See our tech in action at:</p>
          <p className="text-gray-800 mt-2">1/C/7, C.N.A Road, Near Railway Gate, Pudur,Vaniyambadi-635751.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Call Us Directly</h3>
          <p className="text-gray-600">Available during working hours:</p>
          <p className="text-gray-800 mt-2">(+91) 7502137362, 8754753223</p>
        </div>
      </div>
    </section>
  );
}
