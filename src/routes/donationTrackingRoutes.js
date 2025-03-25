import express from "express";
import { addDonationTracking, getDonationTracking } from "../Controllers/donationTrackingController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware(["admin"]), addDonationTracking);
router.get("/:donationId", getDonationTracking);

export default router;
