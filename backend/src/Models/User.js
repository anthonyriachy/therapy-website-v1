// src/models/User.ts
import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
 

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['client', 'therapist'], default: 'client' },
  availability: [{
    day: { type: String },
    slots: [{ type: String }],
  }]
});

// Password hashing before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Password comparison method
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const User = model('User', UserSchema);
export default User;
