// components/Pricing.js
export default function Pricing() {
    return (
      <section className="py-20 bg-gradient-to-r from-[#FDECE6] to-[#E6F0FD]">
        <h2 className="text-4xl font-bold text-center text-gray-800">Our Pricing Plan</h2>
  
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {/* Basic Plan */}
          <div data-aos="flip-left" className="bg-white p-6 shadow-lg rounded-lg w-80 border">
            <div className="bg-[#5B1C1C] text-white text-center py-2 rounded-t-lg text-sm font-medium">
              Currently Available
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold">BASIC PLAN</h3>
              <p className="text-gray-600 text-lg mt-2">Billed Monthly.</p>
              <p className="text-3xl font-bold mt-4">₹20k/Month</p>
              <p className="text-gray-600 text-sm mt-2">
                Design anything and bring your ideas to life
              </p>
  
              {/* Features */}
              <ul className="mt-4 space-y-2 text-left text-gray-700">
                <li>✅ Easy drag & drop editor</li>
                <li>✅ Large library of professionally designed templates</li>
                <li>✅ 1000+ design types</li>
                <li>✅ Large library of stock photos & graphics</li>
                <li>✅ 10 GB of cloud storage</li>
              </ul>
  
              {/* Button */}
              <button className="mt-6 px-6 py-2 border border-black rounded-lg text-lg">
                Connect Us
              </button>
            </div>
          </div>
  
          {/* Standard Plan */}
          <div data-aos="flip-left" className="bg-white p-6 shadow-lg rounded-lg w-80 border">
            <div className="bg-[#5B1C1C] text-white text-center py-2 rounded-t-lg text-sm font-medium">
              Coming Soon
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold">STANDARD PLAN</h3>
              <p className="text-gray-600 text-lg mt-2">Billed Monthly.</p>
              <p className="text-3xl font-bold mt-4">₹25k/Month</p>
              <p className="text-gray-600 text-sm mt-2">
                Design anything and bring your ideas to life
              </p>
  
              {/* Features */}
              <ul className="mt-4 space-y-2 text-left text-gray-700">
                <li>✅ Easy drag & drop editor</li>
                <li>✅ Large library of professionally designed templates</li>
                <li>✅ 1000+ design types</li>
                <li>✅ Large library of stock photos & graphics</li>
                <li>✅ 10 GB of cloud storage</li>
              </ul>
  
              {/* Button */}
              <button className="mt-6 px-6 py-2 border border-black rounded-lg text-lg">
                Connect Us
              </button>
            </div>
          </div>
  
          {/* Premium Plan */}
          <div data-aos="flip-left" className="bg-white p-6 shadow-lg rounded-lg w-80 border">
            <div className="bg-[#5B1C1C] text-white text-center py-2 rounded-t-lg text-sm font-medium">
              Coming Soon
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold">PREMIUM PLAN</h3>
              <p className="text-gray-600 text-lg mt-2">Billed Monthly.</p>
              <p className="text-3xl font-bold mt-4">₹32k/Month</p>
              <p className="text-gray-600 text-sm mt-2">
                Design anything and bring your ideas to life
              </p>
  
              {/* Features */}
              <ul className="mt-4 space-y-2 text-left text-gray-700">
                <li>✅ Easy drag & drop editor</li>
                <li>✅ Large library of professionally designed templates</li>
                <li>✅ 1000+ design types</li>
                <li>✅ Large library of stock photos & graphics</li>
                <li>✅ 10 GB of cloud storage</li>
              </ul>
  
              {/* Button */}
              <button className="mt-6 px-6 py-2 border border-black rounded-lg text-lg">
                Connect Us
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  