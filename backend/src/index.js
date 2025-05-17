
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import dbConnect from './database/connection.js';

import tourRoutes from './routes/tours.js';

import authRoutes from './routes/auths.js';
import reviewRoutes from './routes/reviews.js';
import bookingRoutes from './routes/bookings.js';

dotenv.config(); // Load .env
dbConnect();


const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/auths', authRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/booking', bookingRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
