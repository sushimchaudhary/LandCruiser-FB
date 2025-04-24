import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import tourRoute from './routes/tours.js';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js'



import dbConnect from './database/connection.js';

dotenv.config(); // Load .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());



// Routes
app.use(tourRoute );
app.use(userRoute);
app.use(authRoute)

// Database connection
dbConnect();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
