import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
});

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Tour title is required"],
      unique: true,
      trim: true,
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    photo: {
      type: String,
      required: [true, "Tour photo URL is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "Max group size is required"],
      validate: {
        validator: function (value) {
          return value <= 7;
        },
        message: "Max group size cannot be more than 7.",
      },
    },
    distance: {
      type: Number,
      required: false, // You can make it required if needed
      default: 0, // Optional default value
    },
    reviews: [reviewSchema],
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Virtual ID
tourSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

tourSchema.set("toJSON", {
  virtuals: true,
});

export default mongoose.model("Tour", tourSchema);
