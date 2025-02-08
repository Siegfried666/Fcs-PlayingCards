import { IAbility } from '../interfaces/IAbility';

export class Ability implements IAbility {
  constructor() {}
  ability: string | undefined;
  gameTxt: string | undefined;
  inDepthEffect: string | undefined;
}
