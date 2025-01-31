import { ICard } from '../interfaces/Icard';
import { splitStringToStringArray } from '../utils/helpers';

export class Card implements ICard {
  // #region private fields

  private _abilities: string | undefined;
  private _types: string | undefined;

  // #endregion

  // #region private properties

  get abilities(): string[] {
    return splitStringToStringArray(this._abilities);
  }
  set abilities(value: string) {
    this._abilities = value;
  }

  get types(): string[] {
    return splitStringToStringArray(this._types);
  }
  set types(value: string) {
    this._types = value;
  }

  // #endregion

  constructor() {}

  id?: number | undefined;
  no: string | undefined;
  picSmall: string | undefined;
  picLarge: string | undefined;
  name: string | undefined;
  hp: number | undefined;
  att: number | undefined;
  def: number | undefined;
  sAtt: number | undefined;
  sDef: number | undefined;
  spd: number | undefined;
}
