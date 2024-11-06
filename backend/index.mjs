import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import donationsRoutes from './routes/donations.mjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true, // This is optional as of MongoDB Driver 4.x
            useUnifiedTopology: true, // This is optional as of MongoDB Driver 4.x
            tls: true, // Enable TLS
            tlsAllowInvalidCertificates: true, // Use this for testing; remove in production
        });
        console.log("Connected to MongoDB Atlas");
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err);
        process.exit(1); // Exit process if connection fails
    }
};

// Call the connection function
connectToDatabase();

// Set up routes
app.use('/api/donations', donationsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
