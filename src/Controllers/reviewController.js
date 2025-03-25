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
