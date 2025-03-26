// components/ContactUs.js
export default function ContactUs() {
    return (
      <section id="contact-us" className="py-16 px-6 bg-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-blue-600 text-lg font-semibold tracking-wide">GET IN TOUCH</h3>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Need Help? Let’s Get in Touch</h2>
          <p className="text-gray-600 mt-3">We love to hear from you. Fill out the form below and we will get back to you soon.</p>
        </div>
  
        <div data-aos="fade-up" className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
  
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
  
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
  