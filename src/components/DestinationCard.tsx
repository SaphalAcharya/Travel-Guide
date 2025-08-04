import React from 'react'
import { Star, MapPin, Clock, Mountain } from 'lucide-react'
import { Destination } from '../lib/supabase'

interface DestinationCardProps {
  destination: Destination
  onClick?: () => void
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onClick }) => {
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800'
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800'
      case 'challenging':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={destination.image_url}
          alt={destination.name}
          className="w-full h-64 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800'
          }}
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-semibold">{destination.rating}</span>
        </div>
        {destination.difficulty_level && (
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(destination.difficulty_level)}`}>
            {destination.difficulty_level}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">
            {destination.region && `${destination.region}, `}{destination.country}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{destination.name}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">{destination.duration}</span>
          </div>
          {destination.best_season && (
            <div className="text-sm text-sky-600 font-medium">
              Best: {destination.best_season}
            </div>
          )}
        </div>

        {destination.highlights && destination.highlights.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {destination.highlights.slice(0, 3).map((highlight, index) => (
                <span 
                  key={index}
                  className="bg-sky-100 text-sky-800 px-2 py-1 rounded-full text-xs"
                >
                  {highlight}
                </span>
              ))}
              {destination.highlights.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{destination.highlights.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-sky-600">
            ${destination.price}
          </div>
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard