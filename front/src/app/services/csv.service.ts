import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CsvData } from '../pages/home/home.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': environment.token
    });
  }

  createCsv(data: CsvData) {
    return this.httpClient.post('http://localhost:3000/csv', data, { headers: this.headers });
  }

  getCsvs() {
    return this.httpClient.get('http://localhost:3000/csv', { headers: this.headers });
  }

  getCsv(id: string) {
    return this.httpClient.get(`http://localhost:3000/csv/${id}`, { headers: this.headers });
  }
}
