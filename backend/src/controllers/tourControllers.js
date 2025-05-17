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
    .populate('reviews')
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
export const getTourBySearch = async(req, res)=>{

  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, 'i')
  const distance = parseInt(req.query.distance)
  const maxGroupSize = parseInt(req.query.maxGroupSize)
  try{
    const tours = await Tour.find({
      city, distance:{$get : distance},   // gte means greater than equal
    maxGroupSize:{$gte:maxGroupSize}
  }).populate('reviews');
  res.status(200).json({
    success: true,
    message: 'Successful',
    data: tours,
  })
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "  Tour not found"
    })

  }
};

