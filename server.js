const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// Mock data - In a real app, this would come from a database
const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: "https://images.pexels.com/photos/161815/santorini-oia-greece-blue-161815.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.9,
    price: 1299,
    duration: "7 days",
    description: "Experience the breathtaking sunsets and white-washed buildings of this Greek paradise.",
    featured: true,
    category: "beach"
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    price: 899,
    duration: "10 days",
    description: "Discover tropical beaches, ancient temples, and vibrant culture in the Island of Gods.",
    featured: true,
    category: "cultural"
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.7,
    price: 1599,
    duration: "6 days",
    description: "Immerse yourself in the perfect blend of traditional culture and modern innovation.",
    featured: true,
    category: "city"
  },
  {
    id: 4,
    name: "Maldives",
    country: "Maldives",
    image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.9,
    price: 2299,
    duration: "5 days",
    description: "Relax in overwater villas surrounded by crystal-clear turquoise waters.",
    featured: true,
    category: "luxury"
  }
];

const bookings = [];
const subscribers = [];

// API Routes

// Get all destinations
app.get('/api/destinations', (req, res) => {
  const { category, minPrice, maxPrice, country } = req.query;
  
  let filteredDestinations = [...destinations];
  
  if (category) {
    filteredDestinations = filteredDestinations.filter(dest => dest.category === category);
  }
  
  if (minPrice) {
    filteredDestinations = filteredDestinations.filter(dest => dest.price >= parseInt(minPrice));
  }
  
  if (maxPrice) {
    filteredDestinations = filteredDestinations.filter(dest => dest.price <= parseInt(maxPrice));
  }
  
  if (country) {
    filteredDestinations = filteredDestinations.filter(dest => 
      dest.country.toLowerCase().includes(country.toLowerCase())
    );
  }
  
  res.json({
    success: true,
    data: filteredDestinations,
    total: filteredDestinations.length
  });
});

// Get destination by ID
app.get('/api/destinations/:id', (req, res) => {
  const destinationId = parseInt(req.params.id);
  const destination = destinations.find(dest => dest.id === destinationId);
  
  if (!destination) {
    return res.status(404).json({
      success: false,
      message: 'Destination not found'
    });
  }
  
  res.json({
    success: true,
    data: destination
  });
});

// Search destinations
app.get('/api/search', (req, res) => {
  const { q, limit = 10 } = req.query;
  
  if (!q) {
    return res.status(400).json({
      success: false,
      message: 'Search query is required'
    });
  }
  
  const searchResults = destinations.filter(dest =>
    dest.name.toLowerCase().includes(q.toLowerCase()) ||
    dest.country.toLowerCase().includes(q.toLowerCase()) ||
    dest.description.toLowerCase().includes(q.toLowerCase())
  ).slice(0, parseInt(limit));
  
  res.json({
    success: true,
    data: searchResults,
    total: searchResults.length
  });
});

// Create a booking
app.post('/api/bookings', (req, res) => {
  const { destinationId, customerInfo, travelDates, guests } = req.body;
  
  // Basic validation
  if (!destinationId || !customerInfo || !travelDates) {
    return res.status(400).json({
      success: false,
      message: 'Missing required booking information'
    });
  }
  
  const destination = destinations.find(dest => dest.id === parseInt(destinationId));
  if (!destination) {
    return res.status(404).json({
      success: false,
      message: 'Destination not found'
    });
  }
  
  const booking = {
    id: bookings.length + 1,
    destinationId: parseInt(destinationId),
    destination: destination.name,
    customerInfo,
    travelDates,
    guests: guests || 2,
    totalPrice: destination.price * (guests || 2),
    status: 'confirmed',
    bookingDate: new Date().toISOString(),
    bookingReference: `WL${Date.now()}`
  };
  
  bookings.push(booking);
  
  res.status(201).json({
    success: true,
    data: booking,
    message: 'Booking created successfully'
  });
});

// Get booking by ID
app.get('/api/bookings/:id', (req, res) => {
  const bookingId = parseInt(req.params.id);
  const booking = bookings.find(book => book.id === bookingId);
  
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: 'Booking not found'
    });
  }
  
  res.json({
    success: true,
    data: booking
  });
});

// Newsletter subscription
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({
      success: false,
      message: 'Valid email address is required'
    });
  }
  
  // Check if already subscribed
  const existingSubscriber = subscribers.find(sub => sub.email === email);
  if (existingSubscriber) {
    return res.status(400).json({
      success: false,
      message: 'Email already subscribed'
    });
  }
  
  const subscriber = {
    id: subscribers.length + 1,
    email,
    subscribedAt: new Date().toISOString(),
    active: true
  };
  
  subscribers.push(subscriber);
  
  res.status(201).json({
    success: true,
    data: subscriber,
    message: 'Successfully subscribed to newsletter'
  });
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required'
    });
  }
  
  // In a real app, you would save this to a database and/or send an email
  const contactSubmission = {
    id: Date.now(),
    name,
    email,
    subject: subject || 'General Inquiry',
    message,
    submittedAt: new Date().toISOString(),
    status: 'new'
  };
  
  console.log('Contact form submission:', contactSubmission);
  
  res.status(201).json({
    success: true,
    message: 'Thank you for your message. We will get back to you soon!'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Travel API is running successfully',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Travel API server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🏝️  Destinations: http://localhost:${PORT}/api/destinations`);
});

module.exports = app;