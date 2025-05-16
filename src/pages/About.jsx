import React from 'react';
import { motion } from 'framer-motion';
import DoctorProfile from '../components/about/DoctorProfile';
import ClinicHistory from '../components/about/ClinicHistory';
import { Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-[#4EADC5] p-4 rounded-full inline-block">
              <Eye size={32} className="text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold text-[#1E6B8C] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            About Our Clinic
          </motion.h1>
          
          <motion.p 
            className="text-lg text-[#374151] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Dedicated to providing exceptional eye care with cutting-edge technology and compassionate service.
          </motion.p>
        </motion.div>

        {/* Doctor Profile */}
        <DoctorProfile />

        {/* Clinic History */}
        <ClinicHistory />

        {/* Mission Section */}
        <motion.div 
          className="mt-16 bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-[#1E6B8C] mb-4">Our Mission</h2>
            <p className="text-[#374151] leading-relaxed">
              To deliver personalized, high-quality eye care that improves vision and enhances lives. 
              We prioritize patient education and preventive care to ensure long-term eye health for all our patients.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-6 p-4 bg-[#A5E1D2] bg-opacity-20 rounded-lg border border-[#A5E1D2] border-opacity-40"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-[#0F3C5D] italic text-center">
              "Vision is not simply seeing, it's understanding what we see."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;