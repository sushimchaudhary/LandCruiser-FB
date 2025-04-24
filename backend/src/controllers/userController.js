import User from '../models/user.js';

// Create a new User
export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({ success: true, message: 'User created successfully', data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create User', error: error.message });
  }
};

// Update an existing User
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update User',
      error: error.message,
    });
  }
};

// Delete a User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete User',
      error: error.message,
    });
  }
};

// Get a single User
export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'not found',
      error: error.message,
    });
  }
};

// Get all Users
export const getAllUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 0;

  try {
    const users = await User.find({})
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'not found',
      error: error.message,
    });
  }
};

