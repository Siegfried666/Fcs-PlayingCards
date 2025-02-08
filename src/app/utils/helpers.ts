import * as _ from 'lodash';
import { ApiService } from 'src/services/api.services';
import { Observable } from 'rxjs';

export function isNullOrUndefinedOrEmpty(value: any): boolean {
  return _.isNull(value) || _.isUndefined(value) || _.isEmpty(value);
}

export function stringToArrayOfType<T>(
  list: T[],
  valueStr?: string,
  separator: string = ','
): T[] {
  const listStr = _.split(valueStr, separator);
  return list?.filter((val: any) => {
    return listStr?.includes(val.name);
  });
}

export function getListOfType<T>(
  apiService: ApiService,
  path: string
): Observable<T[]> {
  return apiService.getArrayDataSrc<T>(path);
}
