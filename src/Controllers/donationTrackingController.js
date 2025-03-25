import pool from "../config/database.js";

export const addDonationTracking = async (req, res) => {
    try {
        const { donation_id, description, amount, status } = req.body;

        const [result] = await pool.query(
            "INSERT INTO donation_tracking (donation_id, description, amount, status) VALUES (?, ?, ?, ?)",
            [donation_id, description, amount, status]
        );

        res.status(201).json({ id: result.insertId, donation_id, description, amount, status });
    } catch (error) {
        console.error("Error adding donation tracking:", error);
        res.status(500).json({ message: "Failed to add donation tracking", error: error.message });
    }
};

export const getDonationTracking = async (req, res) => {
    try {
        const { donationId } = req.params;

        const [tracking] = await pool.query(
            "SELECT * FROM donation_tracking WHERE donation_id = ?",
            [donationId]
        );

        res.json(tracking);
    } catch (error) {
        console.error("Error fetching donation tracking:", error);
        res.status(500).json({ message: "Failed to fetch donation tracking", error: error.message });
    }
};
