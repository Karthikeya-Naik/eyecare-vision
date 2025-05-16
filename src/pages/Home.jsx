import HeroSection from '../components/common/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutClinic from '../components/home/AboutClinic';
import EyeCareTips from '../components/home/EyeCareTips';
import Testimonials from '../components/home/Testimonials';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ServicesSection />
        <AboutClinic />
        <EyeCareTips />
        <Testimonials />
        
        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Your Eye Checkup?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience professional eye care with Dr. Rajesh Kumar.
            </p>
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Book Now
            </a>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;