import { motion } from 'framer-motion';
import { Award, Stethoscope, Users, Clock as ClockIcon } from 'lucide-react';
import clinic from '../../assets/images/clinic.webp';
const AboutClinic = () => {
  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '10,000+', label: 'Patients Treated', icon: Users },
    { value: '98%', label: 'Success Rate', icon: Stethoscope },
    { value: '30 min', label: 'Avg. Consultation', icon: ClockIcon },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={clinic} 
                alt="Clinic Interior"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md hidden md:block">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-lg">Dr. Rahul</p>
                  <p className="text-sm text-gray-600">Chief Ophthalmologist</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About EyeCare Vision</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, EyeCare Vision has been providing comprehensive eye care services to 
              the community with a patient-first approach. Our clinic is equipped with state-of-the-art 
              technology to diagnose and treat various eye conditions.
            </p>
            <p className="text-gray-600 mb-8">
              Dr. Rahul and his team of specialists are committed to delivering personalized 
              care tailored to each patient's unique needs, ensuring optimal vision health outcomes.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-xl text-gray-800">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;