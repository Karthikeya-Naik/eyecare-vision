import React from 'react';
import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ClinicHistory = () => {
  return (
    <motion.div 
      className="bg-[#F5F7FA] p-8 rounded-lg mb-12 shadow-sm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-2xl font-bold text-[#1E6B8C] mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Journey
      </motion.h2>
      
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="flex items-start" variants={itemVariants}>
          <div className="bg-[#1E6B8C] text-white rounded-full p-3 mr-4 mt-1 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0F3C5D]">Established in 2010</h3>
            <p className="text-[#374151]">Founded with a vision to provide affordable eye care in Hyderabad.</p>
          </div>
        </motion.div>

        <motion.div className="flex items-start" variants={itemVariants}>
          <div className="bg-[#1E6B8C] text-white rounded-full p-3 mr-4 mt-1 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0F3C5D]">10,000+ Patients</h3>
            <p className="text-[#374151]">Trusted by families across Telangana for comprehensive eye care.</p>
          </div>
        </motion.div>

        <motion.div className="flex items-start" variants={itemVariants}>
          <div className="bg-[#1E6B8C] text-white rounded-full p-3 mr-4 mt-1 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0F3C5D]">Advanced Technology</h3>
            <p className="text-[#374151]">Equipped with OCT, Automated Perimetry, and Phacoemulsification systems.</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ClinicHistory;