import Tour from '../models/tour.js';

// Create a new tour
export const createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    await newTour.save();

    res.status(201).json({ success: true, message: 'Tour created successfully', data: newTour });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create tour', error: error.message });
  }
};

// Update an existing tour
export const updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedTour = await Tour.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedTour) {
      return res.status(404).json({ success: false, message: 'Tour not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Tour updated successfully',
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update tour',
      error: error.message,
    });
  }
};

// Delete a tour
export const deleteTour = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTour = await Tour.findByIdAndDelete(id);

    if (!deletedTour) {
      return res.status(404).json({ success: false, message: 'Tour not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Tour deleted successfully',
      data: deletedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete tour',
      error: error.message,
    });
  }
};

// Get a single tour
export const getSingleTour = async (req, res) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findById(id).populate('reviews'); // Optionally populate reviews if you want them in the response

    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour not found' });
    }

    res.status(200).json({
      success: true,
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'not found',
      error: error.message,
    });
  }
};

// Get all tours
export const getAllTours = async (req, res) => {
   // for pagination
   const page = parseInt(req.query.page);
 

  try {
    const tours = await Tour.find({})
    .skip(page * 8)
    .limit(8); // You can also add filters, sorting, etc. if needed

    res.status(200).json({
      success: true,
      message: "Succesful",
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'not found',
      error: error.message,
    });
  }
};


 // Get tour by search with distance filter
export const getTourBySearch = async (req, res) => {
  try {
    const city = new RegExp(req.query.city, 'i');
    const maxGroupSize = parseInt(req.query.maxGroupSize);
    
    const { latitude, longitude, distance } = req.query; // Expecting lat, long, and distance in the query params

    // Build query object
    const query = { city };

    // If maxGroupSize is provided, add it to the query
    if (!isNaN(maxGroupSize)) {
      query.maxGroupSize = { $gte: maxGroupSize };
    }

    // If latitude, longitude, and distance are provided, add geospatial filter to the query
    if (latitude && longitude && distance) {
      query.location = {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)], // [longitude, latitude]
          },
          $maxDistance: parseInt(distance), // Distance in meters
        },
      };
    }

    const tours = await Tour.find(query);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tours",
      error: err.message,
    });
  }
};

// Get featured tours
export const getFeaturedTours = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);  // Get the page number from the query parameters (default is 0)

  try {
    // Query to find only featured tours
    const tours = await Tour.find({ featured: true })  // Filter by 'featured' field
      .skip(page * 8)  // Skip based on the page number (e.g., skip first 8 tours for page 1)
      .limit(8);  // Limit the result to 8 tours per page (you can adjust this number as needed)

    // Respond with the fetched featured tours
    res.status(200).json({
      success: true,
      message: "Successfully fetched featured tours",
      count: tours.length,  // Number of featured tours fetched
      data: tours,  // Array of featured tour objects
    });
  } catch (error) {
    // Handle any errors and send error response
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured tours',
      error: error.message,
    });
  }
};

//get tour counts

export const getTourCocunt = async(req, res) =>{
  try{
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({success: true, data: tourCount});
  } catch (err){
    res.status(500).json({success: false, message: "failed to fetch"})
  }
};
