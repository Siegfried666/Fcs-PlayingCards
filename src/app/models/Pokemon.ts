import { IAbility } from '../interfaces/IAbility';
import { IMove } from '../interfaces/IMove';
import { IPokemon } from '../interfaces/IPokemon';
import { isNullOrUndefinedOrEmpty } from '../utils/helpers';

export class Pokemon implements IPokemon {
  // #region private fields

  private _abilities: IAbility[] | undefined;
  private _moves: IMove[] | undefined;

  // #endregion

  // #region private properties

  get abilities(): any {
    return isNullOrUndefinedOrEmpty(this._abilities) ? [] : this._abilities;
  }
  set abilities(value: IAbility[]) {
    this._abilities = value;
  }

  get moves(): any {
    return isNullOrUndefinedOrEmpty(this._moves) ? [] : this._moves;
  }
  set moves(values: IMove[]) {
    this._moves = values;
  }

  // #endregion

  constructor() {}
  name: string | undefined;
  no: string | undefined;
  picSmall: string | undefined;
  picLarge: string | undefined;
  descriptionViolet: string | undefined;
  descriptionScarlet: string | undefined;
}
