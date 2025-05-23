import express from 'express';
import {  getOrphans, getOrphanById, addOrphan, updateOrphan,  deleteOrphan } from '../controllers/orphanController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();


router.get("/", getOrphans);
router.get("/:id", getOrphanById);


router.post("/", authMiddleware(['orphanage_staff', 'admin']), addOrphan);

router.put("/:id", authMiddleware(['orphanage_staff', 'admin']), updateOrphan);

router.delete("/:id", authMiddleware(['admin']), deleteOrphan);

export default router;