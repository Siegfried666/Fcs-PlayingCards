import { IStat } from './interfaces/IStat';
import { isNullOrUndefinedOrEmpty } from '../utils/helpers';

export class Stat implements IStat {
  constructor() {}
  types: number[] | undefined;
  id: number | undefined;
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
