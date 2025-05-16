import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import Calendar from '../components/booking/Calendar';
import TimeSlot from '../components/booking/TimeSlot';
import PatientForm from '../components/booking/PatientForm';
import Payment from '../components/booking/Payment';
import { API_BASE_URL } from '../utils/constants';
import { ArrowLeft } from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
};

const Booking = () => {
  const [step, setStep] = useState(1);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { bookingData, updateBookingData, resetBooking } = useBooking();
  const navigate = useNavigate();

  useEffect(() => {
    resetBooking();
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/appointments/read.php`);
      const data = await response.json();
      setAppointments(data.data || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateSelect = (date) => {
    updateBookingData({ selectedDate: date });
    setStep(2);
  };

  const handleSlotSelect = () => {
    setStep(3);
  };

  const handlePatientSubmit = () => {
    setStep(4);
  };

  const handlePaymentConfirm = async () => {
    try {
      const payload = {
        appointment_date: bookingData.selectedDate.toISOString().split('T')[0],
        start_time: bookingData.selectedSlot.start + ':00',
        end_time: bookingData.selectedSlot.end + ':00',
        patient_details: {
          name: bookingData.patientDetails.name,
          email: bookingData.patientDetails.email,
          phone: bookingData.patientDetails.phone,
          age: bookingData.patientDetails.age,
          gender: bookingData.patientDetails.gender
        }
      };

      console.log("Sending payload:", payload);

      const response = await fetch(`${API_BASE_URL}/appointments/create.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Appointment create response:", data);

      if (data.success) {
        updateBookingData({
          appointmentId: data.appointment_id,
          paymentStatus: true,
          // preserve existing data
          selectedDate: bookingData.selectedDate,
          selectedSlot: bookingData.selectedSlot,
          patientDetails: bookingData.patientDetails,
        });
        setTimeout(() => navigate('/confirmation'), 0);
      } else {
        console.error('Error creating appointment:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getProgressWidth = () => {
    switch (step) {
      case 1: return '25%';
      case 2: return '50%';
      case 3: return '75%';
      case 4: return '100%';
      default: return '0%';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <motion.div 
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <div className="flex items-center mb-4">
            {step > 1 && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleBack}
                className="mr-4 p-2 rounded-full bg-white shadow-sm text-gray-600 hover:bg-gray-100 transition-all"
              >
                <ArrowLeft className="h-5 w-5" />
              </motion.button>
            )}
            <h1 className="text-3xl font-bold text-gray-800">Book Your Eye Checkup</h1>
          </div>
          <p className="text-gray-600">Complete your appointment in just a few steps</p>
          
          <div className="mt-6">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#1E6B8C] bg-[#A5E1D2]">
                    Step {step} of 4
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-[#1E6B8C]">
                    {getProgressWidth()}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#A5E1D2]/30">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: getProgressWidth() }}
                  transition={{ duration: 0.5 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#1E6B8C] rounded-r"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {step === 1 && (
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Calendar onDateSelect={handleDateSelect} />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <TimeSlot appointments={appointments} onSlotSelect={handleSlotSelect} />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <PatientForm onNext={handlePatientSubmit} />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Payment onConfirm={handlePaymentConfirm} />
              </motion.div>
            )}
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              className="bg-white rounded-xl shadow-sm p-6 sticky top-6"
            >
              <h3 className="text-lg font-semibold text-[#0F3C5D] mb-4">Appointment Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium text-gray-800">
                    {bookingData.selectedDate ? bookingData.selectedDate.toDateString() : 'Not selected'}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Time Slot</p>
                  <p className="font-medium text-gray-800">
                    {bookingData.selectedSlot ? `${bookingData.selectedSlot.start} - ${bookingData.selectedSlot.end}` : 'Not selected'}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Patient</p>
                  <p className="font-medium text-gray-800">
                    {bookingData.patientDetails?.name || 'Not provided'}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <p className="text-xl font-bold text-[#1E6B8C]">₹100.00</p>
                  <p className="text-xs text-gray-500 mt-1">Eye examination fee</p>
                </div>
              </div>
              
              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 p-4 bg-[#A5E1D2]/20 rounded-lg border border-[#A5E1D2]"
                >
                  <p className="text-sm text-[#0F3C5D]">
                    <span className="font-medium block mb-1">Note:</span>
                    Eye checkup slots are available only between 6:00 PM - 9:30 PM.
                    Each appointment is 30 minutes long.
                  </p>
                </motion.div>  
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Booking;