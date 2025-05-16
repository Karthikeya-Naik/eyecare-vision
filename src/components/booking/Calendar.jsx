import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { format, addMonths, subMonths, isSameMonth, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns';
import { useBooking } from '../../context/BookingContext';

const Calendar = ({ onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const { bookingData } = useBooking();

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const onDateClick = (day) => {
    setSelectedDate(day);
    onDateSelect(day);
  };

  // Animation variants
  const calendarVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const renderHeader = () => (
    <div className="flex items-center justify-between mb-6">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevMonth} 
        className="p-2 rounded-full hover:bg-[#A5E1D2]/30 text-[#1E6B8C] transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center space-x-2"
      >
        <CalendarIcon className="w-5 h-5 text-[#4EADC5]" />
        <h3 className="text-lg font-semibold text-[#0F3C5D]">
          {format(currentMonth, 'MMMM yyyy')}
        </h3>
      </motion.div>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextMonth} 
        className="p-2 rounded-full hover:bg-[#A5E1D2]/30 text-[#1E6B8C] transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </div>
  );

  const renderDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day, index) => (
          <motion.div 
            key={day}
            variants={itemVariants} 
            className="text-center text-sm font-medium text-[#374151] py-2"
          >
            {day}
          </motion.div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = new Date(monthStart);
    const day = getDay(startDate);
    startDate.setDate(startDate.getDate() - day);
    
    const endDate = new Date(monthEnd);
    const endDay = 6 - getDay(endDate);
    endDate.setDate(endDate.getDate() + endDay);

    const dateRange = eachDayOfInterval({ start: startDate, end: endDate });
    const rows = [];
    let days = [];

    dateRange.forEach((day, i) => {
      const cloneDay = new Date(day);
      const formattedDate = format(day, 'd');
      const isCurrentMonth = isSameMonth(day, currentMonth);
      const isSelected = selectedDate && isSameDay(day, selectedDate);
      const isToday = isSameDay(day, new Date());
      const isPast = new Date(day) < new Date(new Date().setHours(0, 0, 0, 0));

      days.push(
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={!isPast && isCurrentMonth ? { scale: 1.05 } : {}} 
          whileTap={!isPast && isCurrentMonth ? { scale: 0.95 } : {}}
          className={`relative p-2 h-14 flex items-center justify-center cursor-pointer rounded-lg
            ${isCurrentMonth ? 'text-gray-800' : 'text-gray-400'} 
            ${isSelected ? 'bg-[#1E6B8C] text-white font-medium shadow-md' : ''}
            ${isToday && !isSelected ? 'border border-[#4EADC5]' : ''}
            ${isPast ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#A5E1D2]/30'}`}
          onClick={() => !isPast && isCurrentMonth && onDateClick(cloneDay)}
        >
          <span>{formattedDate}</span>
          {isToday && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#4EADC5] rounded-full"
            ></motion.span>
          )}
        </motion.div>
      );

      if ((i + 1) % 7 === 0 || i === dateRange.length - 1) {
        rows.push(
          <div key={`row-${i}`} className="grid grid-cols-7 gap-2">
            {days}
          </div>
        );
        days = [];
      }
    });

    return <div className="mb-4 space-y-2">{rows}</div>;
  };

  return (
    <motion.div
      variants={calendarVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
    >
      <div className="mb-4 pb-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-[#0F3C5D]">Select Appointment Date</h3>
        <p className="text-sm text-gray-500">Choose a convenient date for your eye checkup</p>
      </div>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 pt-4 border-t border-gray-100 text-sm text-[#1E6B8C]"
      >
        <p className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#1E6B8C] mr-2"></span>
          Selected date highlighted in blue
        </p>
        <p className="flex items-center mt-1">
          <span className="w-2 h-2 rounded-full border border-[#4EADC5] mr-2"></span>
          Today's date has an outline
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Calendar;