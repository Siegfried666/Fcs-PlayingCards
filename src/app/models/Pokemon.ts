import { IAbility } from '../interfaces/IAbility';
import { IPokemon } from '../interfaces/IPokemon';
import { isNullOrUndefined } from '../utils/helpers';

export class pokemon implements IPokemon {
  // #region private fields

  private _no: string | undefined;
  private _picSmall: string | undefined;
  private _picLarge: string | undefined;
  private _name: string | undefined;
  private _descriptionViolet: string | undefined;
  private _descriptionScarlet: string | undefined;
  private _abilities: IAbility[] | undefined;

  // #endregion

  // #region private properties

  get no(): any {
    return isNullOrUndefined(this._no) ? '' : this._no;
  }
  set no(value: string) {
    this._no = value;
  }

  get picSmall(): any {
    return isNullOrUndefined(this._picSmall) ? '' : this._picSmall;
  }
  set picSmall(value: string) {
    this._picSmall = value;
  }

  get picLarge(): any {
    return isNullOrUndefined(this._picLarge) ? '' : this._picLarge;
  }
  set picLarge(value: string) {
    this._picLarge = value;
  }

  get name(): any {
    return isNullOrUndefined(this._name) ? '' : this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get descriptionViolet(): any {
    return isNullOrUndefined(this._descriptionViolet)
      ? ''
      : this._descriptionViolet;
  }
  set descriptionViolet(value: string) {
    this._descriptionViolet = value;
  }

  get descriptionScarlet(): any {
    return isNullOrUndefined(this._descriptionScarlet)
      ? ''
      : this._descriptionScarlet;
  }
  set descriptionScarlet(value: string) {
    this._descriptionScarlet = value;
  }

  get abilities(): any {
    return isNullOrUndefined(this._abilities) ? [] : this._abilities;
  }
  set abilities(values: IAbility[]) {
    this._abilities = values;
  }

  // #endregion

  constructor() {}
}
