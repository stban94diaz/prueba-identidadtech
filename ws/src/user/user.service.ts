import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto';
import { User } from './types';

@Injectable()
export class UserService {
  constructor (
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async getUsers (): Promise<User[]> {
    return await this.userModel.find({}, { rows: 0 }).exec();
  }

  async getOneUser (userId: string): Promise<User> {
    return await this.userModel.findById(userId).exec();
  }

  async getOneUserByUserName (userName: string): Promise<User> {
    return await this.userModel.findOne({userName}).exec();
  }

  async createUser (user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async updateUser (userId: string, user: CreateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(userId, user, { new: true }).exec();
  }

  async deleteUser (userId: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(userId).exec();
  }

}
