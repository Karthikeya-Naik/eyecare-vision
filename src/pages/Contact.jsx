import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, User, MessageSquare } from 'lucide-react';
import BackToTop from '../components/common/BackToTop';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Get in Touch</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our services or need to schedule an emergency visit?
            Our dedicated team is here to assist you with all your eye care needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div 
            className="md:col-span-3 bg-white p-8 rounded-xl shadow-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-semibold text-blue-800 mb-6 flex items-center"
            >
              <MessageSquare className="mr-2 text-blue-600" /> Send Us a Message
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                    placeholder="Your name"
                    required
                  />
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="5" 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex justify-end"
              >
                <motion.button 
                  type="submit" 
                  className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Clinic Info */}
          <motion.div 
            className="md:col-span-2 bg-blue-900 text-white p-8 rounded-xl shadow-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants} 
              className="text-2xl font-semibold mb-8"
            >
              Contact Information
            </motion.h2>
            
            <div className="space-y-8">
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="bg-blue-800 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-200" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-blue-200">Our Location</h3>
                  <p className="mt-1 text-blue-100">
                    EyeCare Vision Center,<br />
                    Near Uppal Metro Station,<br />
                    Hyderabad, Telangana - 500039
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="bg-blue-800 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-200" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-blue-200">Phone Number</h3>
                  <p className="mt-1 text-blue-100">+91 98765 43210</p>
                  <p className="text-sm text-blue-300">
                    Mon-Sat: 10:00 AM - 1:00 PM<br />
                    Evening: 6:00 PM - 9:30 PM
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="bg-blue-800 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-200" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-blue-200">Email Address</h3>
                  <p className="mt-1 text-blue-100">info@eyecarevision.com</p>
                  <p className="text-sm text-blue-300">Send us your query anytime!</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-blue-800"
            >
              <h3 className="text-lg font-medium text-blue-200 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Map Section */}
        {/* <motion.div 
          className="mt-16 bg-white p-4 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 px-4">Find Us On Map</h2>
          <div className="h-96 bg-gray-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Interactive Map Would Appear Here</p>
            </div>
          </div>
        </motion.div> */}
      </div>
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Contact;