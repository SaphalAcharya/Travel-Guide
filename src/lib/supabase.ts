import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface Destination {
  id: number
  name: string
  country: string
  region?: string
  description: string
  image_url: string
  price: number
  duration: string
  rating: number
  difficulty_level?: string
  best_season?: string
  highlights?: string[]
  created_at: string
}

export interface DestinationFilters {
  country?: string
  region?: string
  minPrice?: number
  maxPrice?: number
  difficulty?: string
  season?: string
}

// Supabase functions
export const fetchDestinations = async (filters?: DestinationFilters) => {
  let query = supabase
    .from('destinations')
    .select('*')
    .order('rating', { ascending: false })

  if (filters?.country) {
    query = query.eq('country', filters.country)
  }
  
  if (filters?.region) {
    query = query.eq('region', filters.region)
  }
  
  if (filters?.minPrice) {
    query = query.gte('price', filters.minPrice)
  }
  
  if (filters?.maxPrice) {
    query = query.lte('price', filters.maxPrice)
  }
  
  if (filters?.difficulty) {
    query = query.eq('difficulty_level', filters.difficulty)
  }
  
  if (filters?.season) {
    query = query.eq('best_season', filters.season)
  }

  const { data, error } = await query
  
  if (error) {
    console.error('Error fetching destinations:', error)
    return []
  }
  
  return data || []
}

export const searchDestinations = async (searchTerm: string) => {
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .or(`name.ilike.%${searchTerm}%,country.ilike.%${searchTerm}%,region.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
    .order('rating', { ascending: false })
    .limit(10)

  if (error) {
    console.error('Error searching destinations:', error)
    return []
  }
  
  return data || []
}

export const getDestinationById = async (id: number) => {
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching destination:', error)
    return null
  }
  
  return data
}