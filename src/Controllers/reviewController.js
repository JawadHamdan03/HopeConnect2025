import pool from "../config/database.js";

export const addReview = async (req, res) => {
    try {
        const { user_id, orphanage_id, rating, comment } = req.body;

        const [result] = await pool.query(
            "INSERT INTO reviews (user_id, orphanage_id, rating, comment) VALUES (?, ?, ?, ?)",
            [user_id, orphanage_id, rating, comment]
        );

        res.status(201).json({ id: result.insertId, user_id, orphanage_id, rating, comment });
    } catch (error) {
        console.error("Error adding review:", error);
        res.status(500).json({ message: "Failed to add review", error: error.message });
    }
};

export const getReviewsForOrphanage = async (req, res) => {
    try {
        const { orphanageId } = req.params;

        const [reviews] = await pool.query(
            "SELECT reviews.*, user.full_name AS reviewer FROM reviews INNER JOIN user ON reviews.user_id = user.id WHERE orphanage_id = ?",
            [orphanageId]
        );

        res.json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ message: "Failed to fetch reviews", error: error.message });
    }
};

export  const updateReviewsForOrphanage = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const { rating, comment } = req.body;

        const [result] = await pool.query(
            "UPDATE reviews SET rating = ?, comment = ? WHERE id = ?",
            [rating, comment, reviewId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Review not found" });
        }

        res.json({ message: "Review updated successfully" });
    } catch (error) {
        console.error("Error updating review:", error);
        res.status(500).json({ message: "Failed to update review", error: error.message });
    }
}
export const deleteReviewsForOrphanage = async (req, res) => {
    try {
        const { reviewId } = req.params;

        const [result] = await pool.query(
            "DELETE FROM reviews WHERE id = ?",
            [reviewId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Review not found" });
        }

        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        console.error("Error deleting review:", error);
        res.status(500).json({ message: "Failed to delete review", error: error.message });
    }
}
