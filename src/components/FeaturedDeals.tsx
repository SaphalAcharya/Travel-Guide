import React from 'react';
import { Percent, Calendar, Users } from 'lucide-react';

const FeaturedDeals: React.FC = () => {
  const deals = [
    {
      id: 1,
      title: "European Adventure",
      description: "Visit 5 countries in 14 days",
      originalPrice: 3299,
      discountedPrice: 2499,
      discount: 24,
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
      validUntil: "March 31, 2025",
      includes: ["Flights", "Hotels", "Tours", "Meals"]
    },
    {
      id: 2,
      title: "Tropical Paradise",
      description: "7 days in Fiji with luxury resort",
      originalPrice: 2899,
      discountedPrice: 1999,
      discount: 31,
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      validUntil: "April 15, 2025",
      includes: ["Resort Stay", "All Meals", "Activities", "Spa"]
    },
    {
      id: 3,
      title: "Safari Experience",
      description: "10 days wildlife safari in Kenya",
      originalPrice: 4199,
      discountedPrice: 3299,
      discount: 21,
      image: "https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?auto=compress&cs=tinysrgb&w=800",
      validUntil: "May 1, 2025",
      includes: ["Safari Tours", "Lodging", "Meals", "Guide"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Deals</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Limited-time offers on our most popular travel packages. Book now and save big!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div 
              key={deal.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Percent className="h-4 w-4" />
                  <span className="font-bold">{deal.discount}% OFF</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg text-gray-500 line-through">${deal.originalPrice}</span>
                    <span className="text-3xl font-bold text-orange-500 ml-2">${deal.discountedPrice}</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>Valid until {deal.validUntil}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {deal.includes.map((item, index) => (
                      <span 
                        key={index}
                        className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Claim Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;