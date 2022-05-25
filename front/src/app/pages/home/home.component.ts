import { Component, OnInit } from '@angular/core';
import * as csv from 'csvtojson'
import { CsvService } from 'src/app/services/csv.service';

export interface CsvData {
  name: string;
  rows?: any[];
  createAt?: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data?: CsvData;

  constructor(
    private csvService: CsvService
  ) { }

  ngOnInit(): void { }

  uploadDocument(event: any) {
    if (!event || !event.target || !event.target.files || !event.target.files[0]) return;
    const file = event.target.files[0];
    let fileReader = new FileReader();
    this.data = {
      name: file.name.split('.')[0]
    };
    fileReader.onload = (e) => {
      if (fileReader.result)
      csv({ output: 'json' })
      .fromString(fileReader.result?.toString())
      .then((rows: any[])=>{ 
        if (this.data) {
          this.data.rows = rows;
          this.data.createAt = new Date();
          this.csvService.createCsv(this.data).subscribe();
        }
      })
    }
    fileReader.readAsText(file);
  }

}
