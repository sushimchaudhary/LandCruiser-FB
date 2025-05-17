import express from 'express';
import { createTour, updateTour, deleteTour, getSingleTour, getAllTours, getTourBySearch,  } from '../controllers/tourControllers.js'; // <-- import all controller methods
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

// Create a new tour
router.post('/', createTour, verifyAdmin);

// Update an existing tour by ID
router.put('/:id', updateTour, verifyAdmin);

// Delete a tour by ID
router.delete('/:id', deleteTour, verifyAdmin);

// Get a single tour by ID
router.get('/:id', getSingleTour);

// Get all tours
router.get('/', getAllTours);

// //get tour by search
// router.get('/getTourBySearch', getTourBySearch);


// // get featured tours 
// router.get('/getFeaturedTours', getFeaturedTours);

// // get tour counts
// router.get('/getTourCount', getTourCount);

export default router;
