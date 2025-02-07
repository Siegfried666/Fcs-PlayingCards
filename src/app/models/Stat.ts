import { IStat } from '../interfaces/IStat';
import { isNullOrUndefined } from '../utils/helpers';

export class Stat implements IStat {
  // #region private fields

  private _name: string | undefined;
  private _weaknessNormal: number | undefined;
  private _weaknessFire: number | undefined;
  private _weaknessWater: number | undefined;
  private _weaknessElectric: number | undefined;
  private _weaknessGrass: number | undefined;
  private _weaknessIce: number | undefined;
  private _weaknessFighting: number | undefined;
  private _weaknessPoison: number | undefined;
  private _weaknessGround: number | undefined;
  private _weaknessFlying: number | undefined;
  private _weaknessPsychic: number | undefined;
  private _weaknessBug: number | undefined;
  private _weaknessRock: number | undefined;
  private _weaknessGhost: number | undefined;
  private _weaknessDragon: number | undefined;
  private _weaknessDark: number | undefined;
  private _weaknessSteel: number | undefined;
  private _weaknessFairy: number | undefined;
  private _move: string | undefined;
  private _type: string | undefined;
  private _category: string | undefined;
  private _powerPoints: number | undefined;
  private _basePower: number | undefined;
  private _accuracy: number | undefined;
  private _battleEffect: string | undefined;
  private _secondaryEffect: string | undefined;
  private _secondaryRate: number | undefined;
  private _criticalRate: number | undefined;
  private _speedPriority: number | undefined;
  private _ability: string | undefined;
  private _gameTxt: string | undefined;
  private _inDepthEffect: string | undefined;
  
  // #endregion

  constructor() {}

  get name(): any {
    return isNullOrUndefined(this._name) ? '' : this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  type1: string | undefined;
  type2: string | undefined;
  hp: number | undefined;
  attack: number | undefined;
  defense: number | undefined;
  specialAttack: number | undefined;
  specialDefense: number | undefined;
  speed: number | undefined;
  weaknessNormal: number | undefined;
  weaknessFire: number | undefined;
  weaknessWater: number | undefined;
  weaknessElectric: number | undefined;
  weaknessGrass: number | undefined;
  weaknessIce: number | undefined;
  weaknessFighting: number | undefined;
  weaknessPoison: number | undefined;
  weaknessGround: number | undefined;
  weaknessFlying: number | undefined;
  weaknessPsychic: number | undefined;
  weaknessBug: number | undefined;
  weaknessRock: number | undefined;
  weaknessGhost: number | undefined;
  weaknessDragon: number | undefined;
  weaknessDark: number | undefined;
  weaknessSteel: number | undefined;
  weaknessFairy: number | undefined;
}
