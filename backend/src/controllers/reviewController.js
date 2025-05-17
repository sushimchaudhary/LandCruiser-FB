import Tour from "../models/tour.js";
import Review from "../models/review.js";

export const createReview = async (req, res) => {
  const { tourId } = req.params;
  const { user, rating, comment } = req.body;

  try {
    // Check if user already reviewed this tour
    const existingReview = await Review.findOne({ tour: tourId, user });
    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: "You have already reviewed this tour.",
      });
    }

    // Create and save the new review
    const newReview = new Review({
      tour: tourId,
      user,
      rating,
      comment,
    });

    const savedReview = await newReview.save();

    // Push review to Tour's reviews array
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res.status(201).json({
      success: true,
      message: "Review submitted successfully.",
      data: savedReview,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to submit review",
      error: err.message,
    });
  }
};
