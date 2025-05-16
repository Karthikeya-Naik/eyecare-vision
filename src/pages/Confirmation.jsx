import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, User, Mail, Phone, MapPin, FileText, AlertTriangle } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { formatDate, formatTime } from '../utils/helpers';

const Confirmation = () => {
  const { bookingData, resetBooking } = useBooking();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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

  if (!bookingData || !bookingData.paymentStatus || !bookingData.appointmentId) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B6B]/10 rounded-full mb-4">
            <AlertTriangle className="h-8 w-8 text-[#FF6B6B]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0F3C5D] mb-4">No Booking Found</h2>
          <p className="text-gray-600 mb-6">Please book an appointment first to view your confirmation details.</p>
          <button className="bg-[#1E6B8C] text-white py-2 px-6 rounded-lg hover:bg-[#0F3C5D] transition-colors">
            Book an Appointment
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#F5F7FA] py-12"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
        >
          <div className="bg-[#1E6B8C] p-8 text-center">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
              className="flex items-center justify-center mb-4"
            >
              <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className="mt-4 text-3xl font-bold text-white"
            >
              Appointment Confirmed!
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="mt-2 text-[#A5E1D2]"
            >
              Your payment has been processed successfully
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="mt-4 inline-block bg-white/10 rounded-full px-4 py-1 text-sm text-white"
            >
              Booking ID: #{bookingData.appointmentId || '1234567'}
            </motion.div>
          </div>

          <div className="p-8">
            <motion.h2 
              variants={itemVariants}
              className="text-xl font-semibold text-[#0F3C5D] mb-6 flex items-center"
            >
              <Calendar className="h-5 w-5 mr-2 text-[#4EADC5]" />
              Appointment Details
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#A5E1D2] p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-[#1E6B8C]" />
                </div>
                <div>
                  <p className="text-sm text-[#4EADC5] font-medium">Date</p>
                  <p className="font-semibold text-[#0F3C5D] text-lg">
                    {bookingData.selectedDate && formatDate(bookingData.selectedDate)}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#A5E1D2] p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-[#1E6B8C]" />
                </div>
                <div>
                  <p className="text-sm text-[#4EADC5] font-medium">Time</p>
                  <p className="font-semibold text-[#0F3C5D] text-lg">
                    {bookingData.selectedSlot && (
                      <>
                        {formatTime(bookingData.selectedSlot.start)} -{' '}
                        {formatTime(bookingData.selectedSlot.end)}
                      </>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#A5E1D2] p-3 rounded-lg">
                  <User className="h-6 w-6 text-[#1E6B8C]" />
                </div>
                <div>
                  <p className="text-sm text-[#4EADC5] font-medium">Patient</p>
                  <p className="font-semibold text-[#0F3C5D] text-lg">
                    {bookingData.patientDetails?.name} ({bookingData.patientDetails?.age} years, {bookingData.patientDetails?.gender})
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#A5E1D2] p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-[#1E6B8C]" />
                </div>
                <div>
                  <p className="text-sm text-[#4EADC5] font-medium">Email</p>
                  <p className="font-semibold text-[#0F3C5D]">
                    {bookingData.patientDetails?.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#A5E1D2] p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-[#1E6B8C]" />
                </div>
                <div>
                  <p className="text-sm text-[#4EADC5] font-medium">Phone</p>
                  <p className="font-semibold text-[#0F3C5D]">
                    {bookingData.patientDetails?.phone}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#A5E1D2] p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-[#1E6B8C]" />
                </div>
                <div>
                  <p className="text-sm text-[#4EADC5] font-medium">Clinic Location</p>
                  <p className="font-semibold text-[#0F3C5D]">
                    EyeCare Vision Clinic, Near Uppal Metro Station, Hyderabad - 500039
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-gray-100"
            >
              <h3 className="text-lg font-semibold text-[#0F3C5D] mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-[#4EADC5]" />
                What to bring to your appointment
              </h3>
              <ul className="space-y-2 text-gray-600 ml-2">
                <li className="flex items-start">
                  <div className="min-w-6 h-6 flex items-center justify-center rounded-full bg-[#A5E1D2]/30 text-[#1E6B8C] mr-3">
                    <span>1</span>
                  </div>
                  <span>Your current eyeglasses or contact lenses</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-6 h-6 flex items-center justify-center rounded-full bg-[#A5E1D2]/30 text-[#1E6B8C] mr-3">
                    <span>2</span>
                  </div>
                  <span>List of any medications you're taking</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-6 h-6 flex items-center justify-center rounded-full bg-[#A5E1D2]/30 text-[#1E6B8C] mr-3">
                    <span>3</span>
                  </div>
                  <span>Your insurance information (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-6 h-6 flex items-center justify-center rounded-full bg-[#A5E1D2]/30 text-[#1E6B8C] mr-3">
                    <span>4</span>
                  </div>
                  <span>Any previous eye exam records</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <div className="bg-[#1E6B8C]/5 p-5 rounded-lg border border-[#1E6B8C]/10">
                <h4 className="font-medium text-[#1E6B8C] mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Important Reminder
                </h4>
                <p className="text-sm text-[#0F3C5D]">
                  Please arrive 10 minutes before your scheduled appointment time.
                  Late arrivals may need to be rescheduled. If you need to cancel, please do so at least 24 hours in advance.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#4EADC5] hover:bg-[#1E6B8C] text-white py-3 px-8 rounded-lg transition-colors inline-flex items-center font-medium"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Add to Calendar
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Confirmation;