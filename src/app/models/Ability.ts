import { IAbility } from '../interfaces/IAbility';
import { isNullOrUndefined } from '../utils/helpers';

export class ability implements IAbility {
  // #region private fields

  private _ability: string | undefined;
  private _gameTxt: string | undefined;
  private _inDepthEffect: string | undefined;

  // #endregion

  // #region private properties

  get ability(): any {
    return isNullOrUndefined(this._ability) ? '' : this._ability;
  }
  set ability(value: string) {
    this._ability = value;
  }

  get gameTxt(): any {
    return isNullOrUndefined(this._gameTxt) ? '' : this._gameTxt;
  }
  set gameTxt(value: string) {
    this._gameTxt = value;
  }

  get inDepthEffect(): any {
    return isNullOrUndefined(this._inDepthEffect) ? '' : this._inDepthEffect;
  }
  set inDepthEffectility(value: string) {
    this._inDepthEffect = value;
  }

  // #endregion

  constructor() {}
}
