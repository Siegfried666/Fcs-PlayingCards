import { Ability } from '../models/Ability';
import { Move } from '../models/Move';

export interface IPokemon {
  no: string | undefined;
  picSmall: string | undefined;
  picLarge: string | undefined;
  name: string | undefined;
  descriptionViolet: string | undefined;
  descriptionScarlet: string | undefined;
  abilities: Ability[] | undefined;
  moves: Move[] | undefined;
}
