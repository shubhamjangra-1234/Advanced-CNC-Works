import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">Advanced CNC Works</h2>
          <p className="mt-4 text-gray-400">
            We provide advanced CNC machining services to meet your industrial
            needs with precision and quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-400">Email: Advancecncwork@gmail.com</li>
            <li className="text-gray-400">Phone: 9810658545 || 8130274372 || 6302695082</li>
            <li className="text-gray-400">
              Address: Khasra no. 379 gali no. 1.5
Ground floor
near Bikaner sweet Sawroop nagar
Delhi-11004
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Designed By</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-400">Shubham</li>
            <li className="text-gray-400">MD.Junaid</li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        © {new Date().getFullYear()} Advanced CNC Works. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
