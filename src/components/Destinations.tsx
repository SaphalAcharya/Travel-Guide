import React, { useState, useEffect } from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  rating: number;
  price: number;
  duration: string;
  description: string;
}

const Destinations: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch destinations
    const fetchDestinations = async () => {
      try {
        // In a real app, this would be an API call
        const mockDestinations: Destination[] = [
          {
            id: 1,
            name: "Santorini",
            country: "Greece",
            image: "https://images.pexels.com/photos/161815/santorini-oia-greece-blue-161815.jpeg?auto=compress&cs=tinysrgb&w=800",
            rating: 4.9,
            price: 1299,
            duration: "7 days",
            description: "Experience the breathtaking sunsets and white-washed buildings of this Greek paradise."
          },
          {
            id: 2,
            name: "Bali",
            country: "Indonesia",
            image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800",
            rating: 4.8,
            price: 899,
            duration: "10 days",
            description: "Discover tropical beaches, ancient temples, and vibrant culture in the Island of Gods."
          },
          {
            id: 3,
            name: "Tokyo",
            country: "Japan",
            image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800",
            rating: 4.7,
            price: 1599,
            duration: "6 days",
            description: "Immerse yourself in the perfect blend of traditional culture and modern innovation."
          },
          {
            id: 4,
            name: "Maldives",
            country: "Maldives",
            image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
            rating: 4.9,
            price: 2299,
            duration: "5 days",
            description: "Relax in overwater villas surrounded by crystal-clear turquoise waters."
          },
          {
            id: 5,
            name: "Iceland",
            country: "Iceland",
            image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
            rating: 4.6,
            price: 1799,
            duration: "8 days",
            description: "Witness Northern Lights, geysers, and dramatic landscapes in the land of fire and ice."
          },
          {
            id: 6,
            name: "Morocco",
            country: "Morocco",
            image: "https://images.pexels.com/photos/2317711/pexels-photo-2317711.jpeg?auto=compress&cs=tinysrgb&w=800",
            rating: 4.5,
            price: 1099,
            duration: "9 days",
            description: "Explore vibrant souks, sahara deserts, and stunning architecture in North Africa."
          }
        ];
        
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        setDestinations(mockDestinations);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Loading amazing destinations...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
                  <div className="h-3 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover handpicked destinations that offer unforgettable experiences and breathtaking beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{destination.country}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{destination.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-sky-600">
                    ${destination.price}
                  </div>
                </div>
                
                <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;