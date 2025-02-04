import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Card } from 'src/app/models/card';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getCardsSrc(dataSourcePath: string): Observable<Card[]> {
    return this._http.get<Card[]>(dataSourcePath).pipe(
      map((response) => {
        return response;
      }),
      catchError((r: HttpErrorResponse) =>
        throwError(() => r.error || 'Server error')
      )
    );
  }
}
