import express from 'express';
import dotenv from 'dotenv';
import orphanRoutes from './src/routes/orphanRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import donationRoutes from './src/routes/donationRoutes.js';

dotenv.config(); 

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('Hope Connect API');
});

app.use('/api/orphans', orphanRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
