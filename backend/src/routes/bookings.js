import express from 'express';
import { createBooking, getBooking, getAllBookings } from '../controllers/bookingController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// Create a booking
router.post('/', verifyUser, createBooking);

// Get a single booking by ID
router.get('/:id', verifyUser, getBooking);

// Get all bookings
router.get('/', verifyUser, getAllBookings);

export default router;
