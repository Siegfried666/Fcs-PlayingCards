import { ICard } from '../interfaces/ICard';
import { IMove } from '../interfaces/IMove';
import { IPokemon } from '../interfaces/IPokemon';
import { IStat } from '../interfaces/IStat';
import { isNullOrUndefinedOrEmpty } from '../utils/helpers';
import { Pokemon } from './Pokemon';

export class Card implements ICard {
  // #region private fields

  private _pokemon: IPokemon | undefined;
  private _stats: IStat | undefined;
  private _moves: IMove[] | undefined;

  // #endregion

  // #region properties

  get pokemon(): any {
    return isNullOrUndefinedOrEmpty(this._pokemon) ? null : this._pokemon;
  }
  set pokemon(value: IPokemon) {
    this._pokemon = value;
  }

  get stats(): any {
    return isNullOrUndefinedOrEmpty(this._stats) ? [] : this._stats;
  }
  set stats(value: IStat) {
    this._stats = value;
  }

  get moves(): any {
    return isNullOrUndefinedOrEmpty(this._moves) ? [] : this._moves;
  }
  set moves(value: IMove[]) {
    this._moves = value;
  }

  // #endregion

  constructor() {}
}
