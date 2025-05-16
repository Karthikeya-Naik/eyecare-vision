import { motion } from 'framer-motion';
import { Eye, CalendarCheck, Clock, ArrowRight } from 'lucide-react';
import heroimage from '../../assets/images/eye.webp';
const HeroSection = () => {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src={heroimage}
          alt="Eye examination"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Your Vision is Our Priority
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-xl text-blue-100"
          >
            Comprehensive eye care services provided by Dr. Rajesh Kumar and his team of specialists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="/booking"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/about"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 bg-opacity-60 hover:bg-opacity-80 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">Expert Eye Care</h3>
            </div>
            <p className="mt-2 text-gray-600">
              Comprehensive eye exams and treatments by experienced ophthalmologists.
            </p>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">Easy Booking</h3>
            </div>
            <p className="mt-2 text-gray-600">
              Book appointments online in just a few clicks, anytime, anywhere.
            </p>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">Convenient Hours</h3>
            </div>
            <p className="mt-2 text-gray-600">
              Evening appointments available from 6 PM to 9:30 PM for your convenience.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;