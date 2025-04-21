<<<<<<< Updated upstream
import express from 'express';
import dotenv from 'dotenv';
import orphanRoutes from './routes/orphanRoutes.js';
import userRoutes from './routes/userRoutes.js';
import donationRoutes from './routes/donationRoutes.js'; 

dotenv.config();
=======
import express from "express";
import orphans from "./routes/orphanRoutes.js";
import users from "./routes/userRoutes.js";
import donation from "./routes/donationRoutes.js";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './utils/swagger.js';
import orphanageRoutes from "./routes/orphanageRoutes.js"

>>>>>>> Stashed changes

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('Hope Connect API');
});

app.use('/api/orphans', orphanRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/users', userRoutes);

<<<<<<< Updated upstream
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
=======
app.use("/api/users", users);

app.use("/api/donations",donation);

app.use('/api/orphanages', orphanageRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
>>>>>>> Stashed changes
});
