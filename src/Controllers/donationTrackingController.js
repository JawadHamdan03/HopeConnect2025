import pool from "../config/database.js";



export const getAllDonationTracking = async (req, res) => {
    try {
        const [tracking] = await pool.query("SELECT * FROM donation_tracking");

        res.json(tracking);
    } catch (error) {
        console.error("Error fetching donation tracking:", error);
        res.status(500).json({ message: "Failed to fetch donation tracking", error: error.message });
    }
};

export const addDonationTracking = async (req, res) => {
    try {
        const { donation_id, orphan_id, orphanage_id, amount, usage_description, description, status } = req.body;

        // استخدام NOW() لقيم `created_at` و `updated_at`
        const [result] = await pool.query(
            "INSERT INTO donation_tracking (donation_id, orphan_id, orphanage_id, amount, usage_description, description, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())",
            [donation_id, orphan_id, orphanage_id, amount, usage_description, description, status]
        );

        res.status(201).json({ 
            id: result.insertId, 
            donation_id, 
            orphan_id, 
            orphanage_id, 
            amount, 
            usage_description, 
            description, 
            status 
        });
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


export const updateDonationTracking = async (req, res) => {
    try {
        const { donationId } = req.params;
        const { status } = req.body;

        const [result] = await pool.query(
            "UPDATE donation_tracking SET status = ? WHERE donation_id = ?",
            [status, donationId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Donation tracking not found" });
        }

        res.json({ message: "Donation tracking updated successfully" });
    } catch (error) {
        console.error("Error updating donation tracking:", error);
        res.status(500).json({ message: "Failed to update donation tracking", error: error.message });
    }
}

export const deleteDonationTracking = async (req, res) => {
    try {
        const { donationId } = req.params;

        const [result] = await pool.query(
            "DELETE FROM donation_tracking WHERE donation_id = ?",
            [donationId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Donation tracking not found" });
        }

        res.json({ message: "Donation tracking deleted successfully" });
    } catch (error) {
        console.error("Error deleting donation tracking:", error);
        res.status(500).json({ message: "Failed to delete donation tracking", error: error.message });
    }
}