import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GnomesService {
  gnomes: any[] = [];
  constructor(private http: HttpClient) {}

  getGnomes() {
    this.http
      .get(
        'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
      )
      .subscribe((gnomes) => {
        this.gnomes.push(gnomes);
      });
  }
}
