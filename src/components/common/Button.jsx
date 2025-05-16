import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center';
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Updated with theme colors
  const variantClasses = {
    primary: 'bg-[#1E6B8C] text-white hover:bg-[#0F3C5D] focus:ring-[#4EADC5]',
    secondary: 'bg-[#4EADC5] text-white hover:bg-[#3C9CB4] focus:ring-[#1E6B8C]',
    accent: 'bg-[#A5E1D2] text-[#0F3C5D] hover:bg-[#8AD0BE] focus:ring-[#4EADC5]',
    outline: 'border border-[#1E6B8C] text-[#1E6B8C] hover:bg-[#F5F7FA] focus:ring-[#4EADC5]',
    ghost: 'text-[#1E6B8C] hover:bg-[#F5F7FA] focus:ring-[#4EADC5]',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        disabled ? disabledClasses : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;