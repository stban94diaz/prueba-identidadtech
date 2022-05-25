import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CsvService } from 'src/app/services/csv.service';
import { CsvData } from '../home/home.component';

@Component({
  selector: 'app-csv-render',
  templateUrl: './csv-render.component.html',
  styleUrls: ['./csv-render.component.scss']
})
export class CsvRenderComponent implements OnInit {
  @Input() data?: CsvData;

  constructor(
    private csvService: CsvService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.csvService.getCsv(params.id).subscribe((res: any) => this.data = res.data);
      }
    })
  }

  getHeaders(): string[] {
    return this.data && this.data.rows ? Object.keys(this.data.rows[0]) : [];
  }

}
