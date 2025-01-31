import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ICard } from 'src/app/interfaces/Icard';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getCardsSrc(dataSourcePath: string): Observable<ICard[]> {
    return this._http.get<ICard[]>(dataSourcePath).pipe(
      map((response) => {
        return response.map((data) => {
          return {
            id: data.id,
            no: data.no,
            picSmall: data.picSmall,
            picLarge: data.picLarge,
            types: data.types,
            abilities: data.abilities,
            name: data.name,
            hp: data.hp,
            att: data.att,
            def: data.def,
            sAtt: data.sAtt,
            sDef: data.sDef,
            spd: data.spd,
          };
        });
      }),
      catchError((r: HttpErrorResponse) =>
        throwError(() => r.error || 'Server error')
      )
    )
  }
}
