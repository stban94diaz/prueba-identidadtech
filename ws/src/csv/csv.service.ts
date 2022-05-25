import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createCsvDto } from './dto';
import { Csv } from './types';

@Injectable()
export class CsvService {
  constructor (
    @InjectModel('Csv') private readonly csvModel: Model<Csv>,
  ) {}

  async getCsvs (): Promise<Csv[]> {
    return await this.csvModel.find({}, { rows: 0 }).exec();
  }

  async getOneCsv (csvId: string): Promise<Csv> {
    return await this.csvModel.findById(csvId).exec();
  }

  async createCsv (csv: createCsvDto): Promise<Csv> {
    const newCsv = new this.csvModel(csv);
    return await newCsv.save();
  }

  async updateCsv (csvId: string, csv: createCsvDto): Promise<Csv> {
    return await this.csvModel.findByIdAndUpdate(csvId, csv, { new: true }).exec();
  }

  async deleteCsv (csvId: string): Promise<Csv> {
    return await this.csvModel.findByIdAndRemove(csvId).exec();
  }

}
