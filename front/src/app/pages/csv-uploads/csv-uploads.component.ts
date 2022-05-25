import { Component, OnInit } from '@angular/core';
import { CsvService } from 'src/app/services/csv.service';

@Component({
  selector: 'app-csv-uploads',
  templateUrl: './csv-uploads.component.html',
  styleUrls: ['./csv-uploads.component.scss']
})
export class CsvUploadsComponent implements OnInit {
  csvs: any[] = [];

  constructor(
    private csvService: CsvService
  ) { }

  ngOnInit(): void {
    this.csvService.getCsvs().subscribe((res: any) => this.csvs = res.data);
  }

}
