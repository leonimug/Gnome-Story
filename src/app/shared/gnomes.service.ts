import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IGnome } from './gnome.model';

@Injectable({
  providedIn: 'root',
})
export class GnomesService {
  constructor(private httpClient: HttpClient) {}

  getGnomes(): Observable<IGnome[]> {
    return this.httpClient
      .get<IGnome[]>(
        'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
      )
      .pipe(catchError(this.handleError<IGnome[]>('getGnomes', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
