import { Document } from "mongoose";

export interface Csv extends Document {
  name: string;
  rows: any[];
}