import { Schema } from 'mongoose';

export const CsvSchema = new Schema({
  name: { type: String, required: true },
  rows: Array,
  createAt: {
    type: Date,
    default: Date.now
  }
});