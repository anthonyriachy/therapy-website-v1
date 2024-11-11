import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDB } from "./config/db.js";
 // import TherapistRoutes from "./src/Routes/TherapistRoutes";
import AppointmentRoutes from "./src/Routes/appointments.js";
import AuthRoutes from "./src/Routes/auth.js";

dotenv.config();

connectToDB();

const app = express();

app.use(express.json());
app.use(cors());

// app.use('/api/therapists', TherapistRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/appointments', AppointmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
