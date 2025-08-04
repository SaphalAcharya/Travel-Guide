-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  country VARCHAR(100) NOT NULL,
  region VARCHAR(100),
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  price INTEGER NOT NULL,
  duration VARCHAR(50) NOT NULL,
  rating DECIMAL(2,1) NOT NULL DEFAULT 4.0,
  difficulty_level VARCHAR(20),
  best_season VARCHAR(50),
  highlights TEXT[], -- Array of strings
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access on destinations" 
ON destinations FOR SELECT 
TO public 
USING (true);

-- Insert sample Nepal destinations
INSERT INTO destinations (name, country, region, description, image_url, price, duration, rating, difficulty_level, best_season, highlights) VALUES
('Everest Base Camp Trek', 'Nepal', 'Khumbu', 'The ultimate trekking adventure to the base of the world''s highest mountain. Experience Sherpa culture, stunning mountain views, and the thrill of reaching 5,364m.', 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800', 2499, '14 days', 4.9, 'Challenging', 'Autumn', ARRAY['Mount Everest views', 'Sherpa culture', 'Namche Bazaar', 'Tengboche Monastery']),

('Annapurna Circuit Trek', 'Nepal', 'Annapurna', 'A classic trek through diverse landscapes, from subtropical forests to high alpine terrain. Cross the Thorong La Pass at 5,416m and experience incredible mountain panoramas.', 'https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=800', 1899, '16 days', 4.8, 'Challenging', 'Autumn', ARRAY['Thorong La Pass', 'Diverse landscapes', 'Hot springs', 'Mountain panoramas']),

('Kathmandu Valley Tour', 'Nepal', 'Central', 'Explore the cultural heart of Nepal with visits to ancient temples, palaces, and UNESCO World Heritage Sites in Kathmandu, Bhaktapur, and Patan.', 'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=800', 299, '3 days', 4.6, 'Easy', 'All seasons', ARRAY['UNESCO sites', 'Ancient temples', 'Local culture', 'Traditional crafts']),

('Pokhara Lake District', 'Nepal', 'Western', 'Relax by the serene Phewa Lake with stunning Annapurna mountain reflections. Perfect for boating, paragliding, and enjoying the laid-back atmosphere.', 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=800', 199, '2 days', 4.7, 'Easy', 'All seasons', ARRAY['Phewa Lake', 'Mountain views', 'Paragliding', 'Peace Pagoda']),

('Chitwan National Park Safari', 'Nepal', 'Terai', 'Wildlife adventure in Nepal''s first national park. Spot rhinos, tigers, elephants, and exotic birds in their natural habitat.', 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=800', 399, '3 days', 4.5, 'Easy', 'Winter', ARRAY['Wildlife safari', 'Rhino spotting', 'Jungle walks', 'Cultural shows']),

('Gokyo Lakes Trek', 'Nepal', 'Khumbu', 'Alternative Everest region trek featuring pristine glacial lakes and panoramic mountain views from Gokyo Ri. Less crowded than EBC with equally stunning scenery.', 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800', 2199, '12 days', 4.8, 'Challenging', 'Autumn', ARRAY['Gokyo Lakes', 'Gokyo Ri summit', 'Glacier views', 'Sherpa villages']),

('Langtang Valley Trek', 'Nepal', 'Langtang', 'Beautiful valley trek close to Kathmandu. Experience Tamang culture, rhododendron forests, and stunning Himalayan views without the crowds.', 'https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=800', 1299, '8 days', 4.6, 'Moderate', 'Spring', ARRAY['Tamang culture', 'Rhododendron forests', 'Kyanjin Gompa', 'Langtang Lirung views']),

('Upper Mustang Trek', 'Nepal', 'Mustang', 'Journey to the forbidden kingdom of Upper Mustang. Explore ancient caves, monasteries, and the walled city of Lo Manthang in this rain-shadow region.', 'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=800', 2799, '14 days', 4.7, 'Moderate', 'Summer', ARRAY['Lo Manthang', 'Ancient caves', 'Tibetan culture', 'Desert landscapes']);

-- Insert some international destinations for comparison
INSERT INTO destinations (name, country, region, description, image_url, price, duration, rating, difficulty_level, best_season, highlights) VALUES
('Mount Fuji Climb', 'Japan', 'Honshu', 'Climb Japan''s sacred mountain and highest peak. Experience traditional Japanese culture and stunning sunrise views from the summit.', 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800', 899, '3 days', 4.5, 'Moderate', 'Summer', ARRAY['Sacred mountain', 'Sunrise views', 'Japanese culture', 'Pilgrimage route']),

('Bali Cultural Tour', 'Indonesia', 'Bali', 'Discover the Island of Gods with visits to ancient temples, rice terraces, and traditional villages. Experience Balinese Hindu culture and stunning landscapes.', 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800', 799, '7 days', 4.6, 'Easy', 'Dry season', ARRAY['Hindu temples', 'Rice terraces', 'Traditional villages', 'Cultural performances']),

('Bhutan Dragon Kingdom', 'Bhutan', 'Thimphu', 'Explore the Last Shangri-La with visits to dzongs, monasteries, and pristine mountain landscapes. Experience Gross National Happiness philosophy.', 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800', 1999, '8 days', 4.8, 'Easy', 'Autumn', ARRAY['Tiger''s Nest Monastery', 'Dzongs', 'Buddhist culture', 'Pristine nature']),

('Ladakh Adventure', 'India', 'Ladakh', 'High-altitude desert adventure in Little Tibet. Experience Buddhist monasteries, stunning landscapes, and unique culture in the Himalayas.', 'https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=800', 1599, '10 days', 4.7, 'Moderate', 'Summer', ARRAY['Buddhist monasteries', 'High altitude lakes', 'Desert landscapes', 'Tibetan culture']);

-- Create indexes for better performance
CREATE INDEX idx_destinations_country ON destinations(country);
CREATE INDEX idx_destinations_rating ON destinations(rating DESC);
CREATE INDEX idx_destinations_price ON destinations(price);
CREATE INDEX idx_destinations_difficulty ON destinations(difficulty_level);

-- Create full-text search index
CREATE INDEX idx_destinations_search ON destinations USING gin(to_tsvector('english', name || ' ' || country || ' ' || region || ' ' || description));