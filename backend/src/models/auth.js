import mongoose from 'mongoose';

const authSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    // Optional: Store password reset token, expiration for password recovery
    resetToken: {
      type: String,
      default: null,
    },
    resetTokenExpiration: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Virtual ID
authSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

authSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.model('Auth', authSchema);
