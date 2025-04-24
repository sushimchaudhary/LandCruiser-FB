import express from 'express';
import {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  
} from '../controllers/userController.js';

const router = express.Router();

// Create a new user
router.post('/', createUser);

// Update user by ID
router.put('/:id', updateUser);

// Delete user by ID
router.delete('/:id', deleteUser);

// Get single user by ID
router.get('/:id', getSingleUser);

// Get all users with pagination
router.get('/', getAllUsers);


export default router;
