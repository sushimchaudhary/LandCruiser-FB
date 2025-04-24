import express from 'express';
import { createTour, updateTour, deleteTour, getSingleTour, getAllTours, getTourBySearch, getFeaturedTours, getTourCocunt } from '../controllers/tourControllers.js'; // <-- import all controller methods

const router = express.Router();

// Create a new tour
router.post('/', createTour);

// Update an existing tour by ID
router.put('/:id', updateTour);

// Delete a tour by ID
router.delete('/:id', deleteTour);

// Get a single tour by ID
router.get('/:id', getSingleTour);

// Get all tours
router.get('/', getAllTours);

//get tour by search
router.get('search/getTourBySearch', getTourBySearch);

// get featured tours 
router.get('search/getFeaturedTours', getFeaturedTours);

// get tour counts
router.get('search/getTourCount', getTourCocunt);

export default router;
