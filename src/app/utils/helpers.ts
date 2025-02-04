import * as _ from 'lodash';
import { ApiService } from 'src/services/api.services';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

export function isNullOrUndefined(value: any): boolean {
  return _.isNull(value) || _.isUndefined(value);
}

export function splitStringToStringArray(
  value?: string,
  separator: string = ','
): string[] {
  return isNullOrUndefined(value) ? [] : _.split(value, separator);
}

export function getCardsFromJson(
  apiService: ApiService,
  path: string
): Observable<Card[]> {
  return apiService.getCardsSrc(path);
}
