import express from "express";
import { 
    addReview, 
    getReviewsForOrphanage, 
    updateReviewsForOrphanage, 
    deleteReviewsForOrphanage 
} from "../Controllers/reviewController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// router.post("/", authMiddleware, addReview);

// router.get("/:orphanageId", getReviewsForOrphanage);

// router.put("/:reviewId", authMiddleware, updateReviewsForOrphanage);

// router.delete("/:reviewId", authMiddleware, deleteReviewsForOrphanage);

//without the authMiddleware
router.post("/", addReview);

router.get("/:orphanageId", getReviewsForOrphanage);

router.put("/:reviewId",  updateReviewsForOrphanage);

router.delete("/:reviewId", deleteReviewsForOrphanage);
export default router;
