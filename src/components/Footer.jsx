import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-10 mt-12 rounded-t-2xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">My Personal Blog</h2>
          <p className="mt-3 text-gray-200">
            Sharing thoughts on <span className="font-semibold">Tech</span>,{" "}
            <span className="font-semibold">Travel</span>, and{" "}
            <span className="font-semibold">Food</span>.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Tech</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Travel</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Food</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Me</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-blue-600 p-2 rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-sky-500 p-2 rounded-full hover:scale-110 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white text-pink-500 p-2 rounded-full hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-blue-800 p-2 rounded-full hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-300 mt-10 border-t border-gray-500 pt-4">
        <p>© {new Date().getFullYear()} My Personal Blog. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
