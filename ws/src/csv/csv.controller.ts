import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CsvService } from './csv.service';

// DTOS
import { createCsvDto } from './dto';

@Controller('csv')
export class CsvController {

  constructor (
    private csvService: CsvService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createCsv(@Body() dto: createCsvDto) {
    return {
      message: 'received',
      data: await this.csvService.createCsv(dto)
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCsvs() {
    return {
      message: 'received',
      data: await this.csvService.getCsvs()
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getOneCsv(@Param('id') id: string) {
    return {
      message: 'received',
      data: await this.csvService.getOneCsv(id)
    };
  }
}
