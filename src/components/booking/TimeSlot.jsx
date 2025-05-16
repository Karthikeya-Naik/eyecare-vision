import { useState } from 'react';
import { Clock, Calendar, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { TIME_SLOTS } from '../../utils/constants';
import { format } from 'date-fns';

const TimeSlot = ({ appointments, onSlotSelect }) => {
  const { bookingData, updateBookingData } = useBooking();
  const [hoveredSlot, setHoveredSlot] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const slotVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSlotClick = (slot) => {
    updateBookingData({ selectedSlot: slot });
    if (onSlotSelect) {
      onSlotSelect();
    }
  };

  const isSlotBooked = (slot) => {
    if (!appointments || !bookingData.selectedDate) return false;
    
    const selectedDateStr = bookingData.selectedDate.toISOString().split('T')[0];
    return appointments.some(
      (appt) => 
        appt.appointment_date === selectedDateStr && 
        appt.start_time === slot.start + ':00'
    );
  };

  const getSlotsForMorningAfternoonEvening = () => {
    if (!bookingData.selectedDate) return { evening: [] };
    
    // For this example, all slots are in the evening (6pm-9:30pm)
    const eveningSlots = TIME_SLOTS.filter(slot => {
      const hour = parseInt(slot.start.split(':')[0]);
      return hour >= 18 && hour < 22;
    });
    
    return { evening: eveningSlots };
  };

  const { evening } = getSlotsForMorningAfternoonEvening();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
    >
      <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
        <Clock className="w-5 h-5 text-[#4EADC5] mr-3" />
        <div>
          <h3 className="text-lg font-semibold text-[#0F3C5D]">Select Time Slot</h3>
          <p className="text-sm text-gray-500">
            {bookingData.selectedDate 
              ? `Available slots for ${format(bookingData.selectedDate, 'EEEE, MMMM d, yyyy')}` 
              : 'Please select a date first'}
          </p>
        </div>
      </div>
      
      {!bookingData.selectedDate ? (
        <div className="flex flex-col items-center justify-center py-8">
          <Calendar className="w-12 h-12 text-gray-300 mb-3" />
          <p className="text-gray-500 text-center">Please select a date to view available time slots</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <h4 className="flex items-center text-md font-medium text-[#1E6B8C] mb-3">
              <span className="inline-block w-3 h-3 rounded-full bg-[#1E6B8C] mr-2"></span>
              Evening Slots
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {evening.map((slot) => {
                const isBooked = isSlotBooked(slot);
                const isSelected = bookingData.selectedSlot?.start === slot.start;
                
                return (
                  <motion.div
                    key={`${slot.start}-${slot.end}`}
                    variants={slotVariants}
                    onHoverStart={() => setHoveredSlot(slot)}
                    onHoverEnd={() => setHoveredSlot(null)}
                    whileHover={!isBooked ? { scale: 1.03 } : {}}
                    whileTap={!isBooked ? { scale: 0.97 } : {}}
                    onClick={() => !isBooked && handleSlotClick(slot)}
                    className={`p-4 border rounded-lg relative overflow-hidden transition-all duration-200
                      ${isSelected 
                        ? 'bg-[#1E6B8C] text-white border-[#1E6B8C] shadow-md' 
                        : isBooked
                          ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                          : 'hover:border-[#4EADC5] border-gray-200 hover:bg-[#A5E1D2]/10'
                      }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className={`text-lg ${isSelected ? 'font-medium text-white' : 'text-gray-700'}`}>
                        {slot.start} - {slot.end}
                      </span>
                      
                      {isBooked && (
                        <span className="inline-flex items-center mt-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                          Booked
                        </span>
                      )}
                      
                      {!isBooked && !isSelected && hoveredSlot === slot && (
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 text-xs text-[#4EADC5]"
                        >
                          Select this slot
                        </motion.span>
                      )}
                      
                      {isSelected && (
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 text-xs text-white"
                        >
                          Your selected time
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-start p-4 bg-[#A5E1D2]/20 rounded-lg border border-[#A5E1D2]/50"
          >
            <Info className="w-5 h-5 text-[#1E6B8C] mr-3 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-[#0F3C5D]">
              <p className="font-medium mb-1">Important Information</p>
              <p>Each appointment slot is 30 minutes long. Please arrive 10 minutes before your scheduled time. We're only available for appointments between 6:00 PM - 9:30 PM.</p>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default TimeSlot;