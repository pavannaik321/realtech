"use client";

export default function ContactDetailsSection() {
  return (
    <section className="bg-white px-6 md:px-20 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Reach Out To Us</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-left">
        <div>
          <h3 className="font-semibold text-lg">Email Support</h3>
          <p className="text-gray-600">Our team responds in real time.</p>
          <a
            className="text-blue-600 mt-2 block"
            href="mailto:realtech@gmail.com"
          >
            realtechvnb@gmail.com
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Visit Our Office</h3>
          <p className="text-gray-600">See our tech in action at:</p>
          <p className="text-gray-800 mt-2">
            1/C/7, C.N.A Road, Near Railway Gate, Pudur, Vaniyambadi - 635751.
          </p>

          {/* Embedded Google Map */}
          <div className="mt-4">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.6469390119023!2d78.6127711!3d12.671138899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bada9f618f52515%3A0xbe9d952f263b7986!2sREAL%20TECH%20CNC!5e0!3m2!1sen!2sin!4v1752389916728!5m2!1sen!2sin"
              width="100%"
              height="100"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
