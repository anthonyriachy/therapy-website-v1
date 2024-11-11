import mongoose, { Document, Schema } from 'mongoose';

 

const availabilitySchema = new Schema({
  therapistId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  availableTimes: [
    {
      date: { type: Date, required: true },
      startTime: { type: String, required: true },
      endTime: { type: String, required: true },
    },
  ],
});

const TherapistAvailability = mongoose.model('TherapistAvailability', availabilitySchema);
export default TherapistAvailability;
