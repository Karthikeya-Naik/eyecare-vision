import React from 'react';

const EyeCare = () => {
  const tips = [
    {
      title: "20-20-20 Rule",
      description: "Every 20 minutes, look at something 20 feet away for 20 seconds to reduce digital eye strain.",
      icon: "👀",
    },
    {
      title: "Regular Checkups",
      description: "Adults should get an eye exam every 2 years; annually if over 60 or with existing conditions.",
      icon: "🩺",
    },
    {
      title: "UV Protection",
      description: "Wear sunglasses with 100% UV protection to prevent cataracts and macular degeneration.",
      icon: "🕶️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">Eye Care Tips & Resources</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert advice to maintain healthy vision and prevent eye diseases.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-gray-900">When should I see an eye doctor?</h3>
              <p className="text-gray-600 mt-1">If you experience blurred vision, headaches, or sudden floaters, schedule an appointment immediately.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-gray-900">Is LASIK safe?</h3>
              <p className="text-gray-600 mt-1">LASIK has a 96% patient satisfaction rate. Dr. Rahul will evaluate your candidacy during a consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeCare;