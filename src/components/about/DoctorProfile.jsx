import React from 'react';
import { motion } from 'framer-motion';
import doctor from '../../assets/images/Doctor.webp';

const DoctorProfile = () => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="md:flex">
        {/* Doctor Image */}
        <motion.div 
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img 
            src={doctor}
            alt="Dr. Rahul" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Doctor Details */}
        <motion.div 
          className="p-8 md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#1E6B8C] mb-2">Dr. Rahul</h2>
          <p className="text-[#4EADC5] mb-4">MBBS, MD (Ophthalmology)</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#0F3C5D] mb-2">About Dr. Rahul</h3>
            <p className="text-[#374151]">
              With over 12 years of experience, Dr. Rahul specializes in cataract surgery, LASIK, and pediatric ophthalmology. 
              He is committed to ethical practice and patient-centric care.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#0F3C5D] mb-2">Clinic Address</h3>
            <p className="text-[#374151]">
              <span className="block">EyeCare Vision Center,</span>
              <span className="block">Near Uppal Metro Station,</span>
              <span className="block">Hyderabad, Telangana - 500039</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DoctorProfile;