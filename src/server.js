import express from "express";
import orphans from "./routes/orphanRoutes.js";
import users from "./routes/userRoutes.js";
import donation from "./routes/donationRoutes.js";
import volunteers from "./routes/volunteerRoutes.js";
import emergencyCampaigns from "./routes/emergencyCampaignRoutes.js";
import orphanageRoutes from "./routes/orphanageRoutes.js";
import authRoutes from './routes/authRoutes.js';
import gazaNews from './routes/newsRoutes.js';
import logisticsRoutes from './routes/logisticsRoutes.js';
import revenueRoutes from './routes/revenueRoutes.js';
import trustRoutes from "./routes/trustRoutes.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Hope Connect API");
});

app.use("/api/orphans", orphans);

app.use("/api/users", users);

app.use("/api/donations", donation);

app.use("/api/volunteerstask", volunteers);

app.use("/api/orphanage", orphanageRoutes);

app.use('/api/auth', authRoutes);

app.use("/api/trust", trustRoutes);


app.use("/api/emergency-campaigns", emergencyCampaigns); // create campaign


app.use('/api/logistics', logisticsRoutes);

app.use("/api/revenue", revenueRoutes);

app.use("/api/gazaNews",gazaNews);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
