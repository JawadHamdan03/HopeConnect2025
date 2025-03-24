import { createDonation, getAllDonations, getDonationById, updateDonation, deleteDonation } from '../controllers/donationController.js'; 
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();


router.post('/donations', authMiddleware(['admin']), createDonation); // create 
router.get('/donations', authMiddleware(['admin', 'user']), getAllDonations); // get all donation
router.get('/donations/:id', authMiddleware(['admin', 'user']), getDonationById); // get donation by ID
router.put('/donations/:id', authMiddleware(['admin']), updateDonation); // update donation
router.delete('/donations/:id', authMiddleware(['admin']), deleteDonation); // delete donation

export default router; 
