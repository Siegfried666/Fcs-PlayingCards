import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getArrayDataSrc<T>(dataSourcePath: string): Observable<T[]> {
    return this._http.get<T[]>(dataSourcePath).pipe(
      map((response) => {
        return response;
      }),
      catchError((r: HttpErrorResponse) =>
        throwError(() => r.error || 'Server error')
      )
    );
  }
}
