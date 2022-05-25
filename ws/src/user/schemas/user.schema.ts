import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  userName: { type: String, required: true },
  pass: { type: String, required: true },
  createAt: {
    type: Date,
    default: Date.now
  }
});