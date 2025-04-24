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
  { timestamps: true }  // Automatically adds createdAt and updatedAt
);

// Export the Review Model
export default mongoose.model("Review", reviewSchema);
