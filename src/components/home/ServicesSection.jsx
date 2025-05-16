import { Eye, Contact, Droplet, Glasses, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../utils/constants';

const iconComponents = {
  eye: Eye,
  contact: Contact,
  droplet: Droplet,
  glasses: Glasses,
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Comprehensive Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Specialized eye care treatments tailored to your unique vision needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconComponents[service.icon] || Eye;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col h-full border border-blue-100"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-5">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-5 flex-grow">{service.description}</p>
                <a 
                  href={service.link || '/services'}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 group mt-auto"
                >
                  Learn more
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;