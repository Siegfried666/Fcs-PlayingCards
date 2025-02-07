import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Card } from 'src/app/models/Card';

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

  getImageUrlSrc(url: string): Observable<string> {
    return this._http.get<string>(url).pipe(
      map((response) => {
        return response;
      }),
      catchError((r: HttpErrorResponse) =>
        throwError(() => r.error || 'Server error')
      )
    );
  }
}
