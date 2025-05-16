import { useState } from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { formatDate } from '../../utils/helpers';
import { Calendar, Clock, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

const Payment = ({ onConfirm }) => {
  const { bookingData } = useBooking();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handlePaymentSubmit = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onConfirm();
    }, 1500);
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
          <CreditCard className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#0F3C5D]">Payment Details</h3>
      </div>
      
      <div className="space-y-8">
        <motion.div variants={itemVariants} className="bg-[#F5F7FA] rounded-lg p-5 border border-gray-100">
          <h4 className="text-md font-medium text-[#0F3C5D] mb-4 flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-[#4EADC5]" />
            Appointment Summary
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-[#4EADC5]" />
                Date
              </span>
              <span className="font-medium text-[#0F3C5D] bg-[#A5E1D2]/20 py-1 px-3 rounded-full">
                {bookingData.selectedDate ? formatDate(bookingData.selectedDate) : '--'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 flex items-center">
                <Clock className="h-4 w-4 mr-2 text-[#4EADC5]" />
                Time
              </span>
              <span className="font-medium text-[#0F3C5D] bg-[#A5E1D2]/20 py-1 px-3 rounded-full">
                {bookingData.selectedSlot ? `${bookingData.selectedSlot.start} - ${bookingData.selectedSlot.end}` : '--'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Patient</span>
              <span className="font-medium text-[#0F3C5D]">
                {bookingData.patientDetails?.name || '--'}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-md font-medium text-[#0F3C5D] mb-4 flex items-center">
            <CreditCard className="h-4 w-4 mr-2 text-[#4EADC5]" />
            Payment Method
          </h4>
          <div className="space-y-4">
            <div 
              className={`flex items-center p-4 border rounded-lg transition-all cursor-pointer ${
                paymentMethod === 'upi' ? 'border-[#4EADC5] bg-[#A5E1D2]/10' : 'border-gray-200 bg-white'
              }`}
              onClick={() => setPaymentMethod('upi')}
            >
              <input
                type="radio"
                id="upi"
                name="payment"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
                className="h-4 w-4 text-[#1E6B8C] focus:ring-[#4EADC5] border-gray-300"
              />
              <label htmlFor="upi" className="ml-3 cursor-pointer flex flex-1 items-center justify-between">
                <span className="text-sm font-medium text-[#374151]">UPI Payment</span>
                <div className="flex space-x-2">
                  <div className="h-6 w-10 bg-[#A5E1D2] rounded flex items-center justify-center text-[#0F3C5D] text-xs font-bold">
                    UPI
                  </div>
                  <div className="h-6 w-10 bg-[#4EADC5] rounded flex items-center justify-center text-white text-xs font-bold">
                    GPay
                  </div>
                </div>
              </label>
            </div>
            
            <div 
              className={`flex items-center p-4 border rounded-lg transition-all cursor-pointer ${
                paymentMethod === 'card' ? 'border-[#4EADC5] bg-[#A5E1D2]/10' : 'border-gray-200 bg-white'
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <input
                type="radio"
                id="card"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="h-4 w-4 text-[#1E6B8C] focus:ring-[#4EADC5] border-gray-300"
              />
              <label htmlFor="card" className="ml-3 cursor-pointer flex flex-1 items-center justify-between">
                <span className="text-sm font-medium text-[#374151]">Credit/Debit Card</span>
                <div className="flex space-x-2">
                  <div className="h-6 w-10 bg-[#1E6B8C] rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div className="h-6 w-14 bg-[#0F3C5D] rounded flex items-center justify-center text-white text-xs font-bold">
                    MASTER
                  </div>
                </div>
              </label>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="border-t pt-6 mt-6">
          <div className="mb-6">
            <div className="flex justify-between items-center bg-[#F5F7FA] p-4 rounded-lg">
              <div>
                <p className="text-sm text-[#4EADC5]">Total Amount</p>
                <p className="text-2xl font-bold text-[#0F3C5D]">₹100.00</p>
              </div>
              <div className="flex items-center text-sm bg-[#A5E1D2]/20 text-[#0F3C5D] px-3 py-1 rounded-full">
                <AlertCircle className="h-4 w-4 mr-1" />
                Non-refundable
              </div>
            </div>
          </div>

          <motion.button
            onClick={handlePaymentSubmit}
            disabled={isProcessing}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(30, 107, 140, 0.1), 0 4px 6px -2px rgba(30, 107, 140, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center bg-[#1E6B8C] hover:bg-[#0F3C5D] text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Processing...
              </>
            ) : (
              <>
                <CheckCircle className="mr-2 h-5 w-5" />
                Confirm Payment
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Payment;