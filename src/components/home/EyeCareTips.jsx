import { motion } from 'framer-motion';
import { Monitor, Sun, BookOpen, EyeOff, ChevronRight } from 'lucide-react';

const tips = [
  {
    title: 'Follow the 20-20-20 Rule',
    description: 'Every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye strain.',
    icon: Monitor,
    learnMore: '/tips/20-20-20-rule'
  },
  {
    title: 'UV Protection',
    description: 'Protect your eyes from harmful UV rays by wearing quality sunglasses with 100% UV protection.',
    icon: Sun,
    learnMore: '/tips/uv-protection'
  },
  {
    title: 'Proper Reading Habits',
    description: 'Maintain proper distance (14-16 inches) and ensure adequate lighting when reading.',
    icon: BookOpen,
    learnMore: '/tips/reading-habits'
  },
  {
    title: 'Digital Eye Strain',
    description: 'Reduce blue light exposure by using filters and taking regular screen breaks.',
    icon: EyeOff,
    learnMore: '/tips/digital-eye-strain'
  },
];

const EyeCareTips = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Eye Care Tips & Advice</h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Expert recommendations to maintain optimal eye health and prevent vision problems
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all flex flex-col h-full"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-5">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                <p className="text-blue-100 mb-5 flex-grow">{tip.description}</p>
                <a 
                  href={tip.learnMore}
                  className="inline-flex items-center text-blue-200 hover:text-white group mt-auto"
                >
                  Learn more
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/eye-care"
            className="inline-flex items-center px-6 py-3 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            View all eye care tips
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EyeCareTips;