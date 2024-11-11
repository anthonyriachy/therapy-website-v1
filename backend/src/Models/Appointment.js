// src/models/Appointment.ts
import { Schema, model} from 'mongoose';
 

const AppointmentSchema = new Schema({
  therapist: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  client: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  isFreeSession: { type: Boolean, default: true },
});

const Appointment = model('Appointment', AppointmentSchema);
export default Appointment;
