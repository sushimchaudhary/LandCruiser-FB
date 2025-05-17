import mongoose from "mongoose";

// Define the Review Schema
const reviewSchema = new mongoose.Schema(
  {
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    user: {
      type: String,
      required: [true, "User ID is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
    },
  },
  { timestamps: true }
);

// Prevent duplicate reviews from the same user for the same tour
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

export default mongoose.model("Review", reviewSchema);
