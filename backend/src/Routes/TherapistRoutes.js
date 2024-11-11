// // routes/therapists.js
// import express from 'express';
// import Therapist from '../Models/User';

// const router = express.Router();


// router.post('/', async (req, res) => {
//   try {
//     const therapist = new Therapist(req.body);
//     await therapist.save();
//     res.status(201).json({success:true,data:therapist});
//   } catch (error) {
//     res.status(400).json({ success:false,message: error.message });
//   }
// });

// // Get all therapists
// router.get('/', async (req, res) => {
//   try {
//     const therapists = await Therapist.find();
//     res.status(200).json({success:true,data:therapists});
//   } catch (error) {
//     res.status(500).json({ success:false,message: error.message });
//   }
// });

// // Get a single therapist by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const therapist = await Therapist.findById(req.params.id);
//     if (!therapist) {
//       return res.status(404).json({ success:true,message: 'Therapist not found' });
//     }
//     res.status(200).json(therapist);
//   } catch (error) {
//     res.status(500).json({success:false ,message: error.message });
//   }
// });

// // Update a therapist by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const therapist = await Therapist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!therapist) {
//       return res.status(404).json({success:false, message: 'Therapist not found' });
//     }
//     res.status(200).json(therapist);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete a therapist by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const therapist = await Therapist.findByIdAndDelete(req.params.id);
//     if (!therapist) {
//       return res.status(404).json({ message: 'Therapist not found' });
//     }
//     res.status(200).json({ message: 'Therapist deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
