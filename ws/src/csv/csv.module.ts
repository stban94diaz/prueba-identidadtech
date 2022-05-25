import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CsvController } from './csv.controller';
import { CsvService } from './csv.service';
import { CsvSchema } from './schemas/csv.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Csv', schema: CsvSchema },
    ])
  ],
  controllers: [CsvController],
  providers: [CsvService]
})
export class CsvModule {}
