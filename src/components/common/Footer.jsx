import { Facebook, Twitter, Instagram,Eye, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Eye className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-xl font-bold">EyeCare Vision</span>
            </div>
            <p className="text-gray-300">
              Comprehensive eye care services by Dr. Rajesh Kumar and his team of specialists.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/eye-care" className="text-gray-300 hover:text-blue-400 transition-colors">Eye Care Tips</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-blue-400 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Comprehensive Eye Exam</li>
              <li className="text-gray-300">Contact Lens Fitting</li>
              <li className="text-gray-300">Dry Eye Treatment</li>
              <li className="text-gray-300">Glaucoma Screening</li>
              <li className="text-gray-300">Cataract Evaluation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Vision Street, Eye Care District, Bangalore - 560001
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-blue-400">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a href="mailto:info@eyecarevision.com" className="text-gray-300 hover:text-blue-400">
                  info@eyecarevision.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} EyeCare Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;