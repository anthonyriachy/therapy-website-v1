// import { Request, Response } from 'express';
// import TherapistAvailability, { IAvailability } from '../models/TherapistAvailability';
// import { IUser } from '../Models/User';

// interface IAvailabilityRequest extends Request {
//     therapistId:string;
//     availableTimes: IAvailability['availableTimes'];
//     user:IUser
// }

// // Set therapist availability
// export const setAvailability = async (req: Request, res: Response): Promise<void> => {
//   const { therapistId, availableTimes } = req.body as IAvailabilityRequest;;

//   // Validate if user is a therapist
//   if (req.user.role !== 'therapist') {
//     res.status(403).json({ message: 'Only therapists can set availability' });
//     return;
//   }

//   // Find or create therapist availability record
//   let availability = await TherapistAvailability.findOne({ therapistId });
//   if (!availability) {
//     availability = new TherapistAvailability({ therapistId, availableTimes });
//   } else {
//     availability.availableTimes = availableTimes; // update availability
//   }

//   await availability.save();
//   res.json({ message: 'Availability updated successfully', availability });
// };
