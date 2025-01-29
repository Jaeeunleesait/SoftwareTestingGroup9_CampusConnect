import express from 'express';
import { getAllUsers, getUserById, getMyUser, createUser, updateUser, deleteUser } from '../controllers/user-controller';
import { verifySession, protectRoute } from '../middleware/user-middleware';


const router = express.Router();


// GET /api/users/ - Get all users
router.get('/', verifySession, protectRoute(['Read-Only', 'Read-Write', 'Full Access']), getAllUsers);

// GET /api/users/:id - Get a single user by ID
router.get('/:id', verifySession, protectRoute(['Read-Write', 'Full Access']), getUserById);
    
// GET /api/users/me - Get current user
router.get('/me', verifySession, getMyUser);

// POST: /api/users/ - Create a new user
router.post('/', verifySession, protectRoute(['Read-Write', 'Full Access']), createUser);

// PATCH /api/users/:id - Update a user by ID. This is a partial update
// router.patch('/:id', verifySession, protectRoute, updateUser);

// PUT /api/users/:id - Update a user by ID. This is a full update
router.put('/:id', verifySession, protectRoute(['Full Access']), updateUser);

// DELETE /api/users/:id - Delete a user by ID
router.delete('/:id', verifySession, protectRoute(['Full Access']), deleteUser);


// module.exports = router;
export default router;