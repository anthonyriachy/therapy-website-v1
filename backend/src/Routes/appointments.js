// src/routes/appointment.ts
import { Router  } from 'express';
import Appointment from '../Models/Appointment.js';


const router = Router();

// Create appointment
router.post('/', async (req, res ) => {
  const { therapistId, clientId, startTime, endTime } = req.body;

  const existingFreeSession = await Appointment.findOne({ client: clientId, isFreeSession: true });

  const appointment = new Appointment({
    therapist: therapistId,
    client: clientId,
    startTime,
    endTime,
    isFreeSession: !existingFreeSession,
  });

  await appointment.save();
  res.status(201).json({ success: true, appointment });
});

export default router;
