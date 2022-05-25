import { Document } from "mongoose";

export interface User extends Document {
  userName: string;
  pass: string;
}