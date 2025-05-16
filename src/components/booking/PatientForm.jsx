import { useState } from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { validateEmail, validatePhone } from '../../utils/helpers';
import { User, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

const PatientForm = ({ onNext }) => {
  const { bookingData, updateBookingData } = useBooking();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateBookingData({
      patientDetails: {
        ...bookingData.patientDetails,
        [name]: value
      }
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!bookingData.patientDetails?.name) newErrors.name = 'Name is required';
    if (!bookingData.patientDetails?.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(bookingData.patientDetails.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!bookingData.patientDetails?.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!validatePhone(bookingData.patientDetails.phone)) {
      newErrors.phone = 'Invalid phone number (10 digits)';
    }
    if (!bookingData.patientDetails?.age) newErrors.age = 'Age is required';
    if (!bookingData.patientDetails?.gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
    >
      <div className="flex items-center mb-6">
        <div className="bg-[#1E6B8C] p-2 rounded-full mr-3">
          <User className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#0F3C5D]">Patient Information</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div variants={itemVariants}>
          <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-2">
            Full Name <span className="text-[#FF6B6B]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-[#4EADC5]" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={bookingData.patientDetails?.name || ''}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-[#4EADC5] transition-all ${
                errors.name ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]/20' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-[#FF6B6B]">{errors.name}</p>}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-2">
              Email <span className="text-[#FF6B6B]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-[#4EADC5]" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={bookingData.patientDetails?.email || ''}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-[#4EADC5] transition-all ${
                  errors.email ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]/20' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="mt-1 text-sm text-[#FF6B6B]">{errors.email}</p>}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-2">
              Phone <span className="text-[#FF6B6B]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-[#4EADC5]" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={bookingData.patientDetails?.phone || ''}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-[#4EADC5] transition-all ${
                  errors.phone ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]/20' : 'border-gray-300'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="mt-1 text-sm text-[#FF6B6B]">{errors.phone}</p>}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label htmlFor="age" className="block text-sm font-medium text-[#374151] mb-2">
              Age <span className="text-[#FF6B6B]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-[#4EADC5]" />
              </div>
              <input
                type="number"
                id="age"
                name="age"
                min="1"
                max="120"
                value={bookingData.patientDetails?.age || ''}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-[#4EADC5] transition-all ${
                  errors.age ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]/20' : 'border-gray-300'
                }`}
                placeholder="Enter your age"
              />
              {errors.age && <p className="mt-1 text-sm text-[#FF6B6B]">{errors.age}</p>}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-[#374151] mb-2">
              Gender <span className="text-[#FF6B6B]">*</span>
            </label>
            <div className="flex space-x-4 mt-2">
              {['Male', 'Female', 'Other'].map((gender) => (
                <label key={gender} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={bookingData.patientDetails?.gender === gender}
                    onChange={handleChange}
                    className="h-5 w-5 text-[#1E6B8C] focus:ring-[#4EADC5] border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">{gender}</span>
                </label>
              ))}
            </div>
            {errors.gender && <p className="mt-1 text-sm text-[#FF6B6B]">{errors.gender}</p>}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="pt-6">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(30, 107, 140, 0.1), 0 4px 6px -2px rgba(30, 107, 140, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center bg-[#1E6B8C] hover:bg-[#0F3C5D] text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium"
          >
            <span>Continue to Payment</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default PatientForm;