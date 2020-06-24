import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IGnome } from './gnome.model';

@Injectable({
  providedIn: 'root',
})
export class GnomesService {
  private gnomesUrl =
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  constructor(private httpClient: HttpClient) {}

  getGnomes(): Observable<IGnome[]> {
    return this.httpClient
      .get<IGnome[]>(this.gnomesUrl)
      .pipe(catchError(this.handleError<IGnome[]>('getGnomes', [])));
  }

  getGnome(id: number): Observable<IGnome> {
    const url = `${this.gnomesUrl} /${id}`;
    return this.httpClient
      .get<IGnome>(url)
      .pipe(catchError(this.handleError<IGnome>(`getGnome id=${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
