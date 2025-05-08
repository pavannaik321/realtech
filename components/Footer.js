import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Brand & About */}
        <div>
          <h2 className="text-2xl font-bold">RealTech</h2>
          <p className="text-gray-400 text-sm mt-3">
            Premium CNC Machines engineered for precision & durability.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li><a href="/index" className="hover:text-blue-400">Home</a></li>
            <li><a href="/aboutus" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Products</a></li>
            <li><a href="/page" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-gray-400 text-sm mt-3">1/C/7, C.N.A Road, Near Railway Gate, Pudur,Vaniyambadi-635751</p>
          <p className="text-gray-400 text-sm">Email: realtech@gmail.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 7502137362, 8754753223</p>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Powered by Techbite.
      </div>
    </footer>
  );
}
