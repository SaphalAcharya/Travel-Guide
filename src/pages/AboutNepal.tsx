import React from 'react'
import { Mountain, Users, MapPin, Calendar, Star, Heart } from 'lucide-react'

const AboutNepal: React.FC = () => {
  const facts = [
    { icon: Mountain, label: 'Highest Peak', value: 'Mount Everest (8,848m)' },
    { icon: Users, label: 'Population', value: '30+ Million' },
    { icon: MapPin, label: 'Capital', value: 'Kathmandu' },
    { icon: Calendar, label: 'Best Time to Visit', value: 'Oct-Dec, Mar-May' }
  ]

  const highlights = [
    {
      title: 'Himalayan Adventures',
      description: 'Home to 8 of the world\'s 14 highest peaks, including Mount Everest',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Rich Cultural Heritage',
      description: 'Ancient temples, monasteries, and UNESCO World Heritage Sites',
      image: 'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Diverse Wildlife',
      description: 'From Bengal tigers to snow leopards in national parks and reserves',
      image: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Warm Hospitality',
      description: 'Experience the legendary warmth and friendliness of Nepali people',
      image: 'https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Nepal</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Land of the Himalayas, Birthplace of Buddha, and Home to Mount Everest
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <fact.icon className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{fact.label}</h3>
                <p className="text-gray-600">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover the Magic of Nepal</h2>
            
            <p className="text-gray-700 mb-6">
              Nepal, officially known as the Federal Democratic Republic of Nepal, is a landlocked country 
              in South Asia. It is mainly situated in the Himalayas, but also includes parts of the 
              Indo-Gangetic Plain. Nepal is a country of extraordinary diversity, both in terms of its 
              geography and its people.
            </p>

            <p className="text-gray-700 mb-6">
              From the towering peaks of the Himalayas to the subtropical plains of the Terai, Nepal 
              offers an incredible range of landscapes and experiences. The country is home to Mount 
              Everest, the world's highest peak, and serves as a gateway to some of the most spectacular 
              trekking and mountaineering adventures on Earth.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Richness</h3>
            
            <p className="text-gray-700 mb-6">
              Nepal is the birthplace of Lord Buddha and is deeply rooted in Hindu and Buddhist traditions. 
              The country boasts numerous UNESCO World Heritage Sites, including ancient temples, palaces, 
              and stupas that showcase its rich cultural heritage. The Kathmandu Valley alone contains 
              seven World Heritage Sites within a radius of just 15 kilometers.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Adventure Paradise</h3>
            
            <p className="text-gray-700 mb-6">
              For adventure enthusiasts, Nepal is unparalleled. Whether you're looking to trek to Everest 
              Base Camp, explore the Annapurna Circuit, go white-water rafting, or experience wildlife 
              safaris in Chitwan National Park, Nepal offers adventures for every level of thrill-seeker.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Visit Nepal?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes Nepal one of the world's most captivating destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography & Climate */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Geography & Climate</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Three Distinct Regions</h3>
                  <p className="text-gray-700">
                    <strong>Himalayas:</strong> The northern region featuring the world's highest peaks<br/>
                    <strong>Hills:</strong> The central region with moderate climate and rich culture<br/>
                    <strong>Terai:</strong> The southern plains with subtropical climate and wildlife
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Time to Visit</h3>
                  <p className="text-gray-700">
                    <strong>Autumn (Oct-Dec):</strong> Clear skies, perfect for trekking and mountain views<br/>
                    <strong>Spring (Mar-May):</strong> Warm weather, blooming rhododendrons, ideal for hiking
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nepal landscape"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-orange-200" />
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Nepal?</h2>
          <p className="text-xl mb-8 text-sky-100">
            Start planning your adventure to the roof of the world. From mountain treks to cultural tours, 
            we'll help you discover the best of Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/destinations?country=Nepal"
              className="bg-white text-sky-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Explore Nepal Destinations
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-sky-600 transition-colors duration-200 font-semibold"
            >
              Plan Your Trip
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutNepal