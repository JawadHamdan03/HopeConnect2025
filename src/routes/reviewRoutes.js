import express from "express";
import { addReview, getReviewsForOrphanage } from "../Controllers/reviewController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware(["donor", "sponsor"]), addReview);
router.get("/:orphanageId", getReviewsForOrphanage);

export default router;
