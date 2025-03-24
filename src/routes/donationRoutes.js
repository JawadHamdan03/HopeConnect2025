import express from 'express';
const router = express.Router();
import * as donationController from '../controllers/donationController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.post('/', authMiddleware(['donor', 'admin']), donationController.createSponsorship);
router.get('/',  donationController.getAllSponsorships);
router.get('/:id',  donationController.getSponsorshipById);
router.put('/:id', authMiddleware(['admin']), donationController.updateSponsorship);
router.delete('/:id', authMiddleware(['admin']), donationController.deleteSponsorship);

export default router;