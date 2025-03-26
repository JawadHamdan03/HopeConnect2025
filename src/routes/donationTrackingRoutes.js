import express from "express";
import { getAllDonationTracking,addDonationTracking, getDonationTracking ,updateDonationTracking ,deleteDonationTracking  } from "../Controllers/donationTrackingController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", addDonationTracking);
router.get("/:donationId", getDonationTracking);
router.get("/", getAllDonationTracking);
router.put("/:donationId", updateDonationTracking);
router.delete("/:donationId", deleteDonationTracking);

export default router;
