import { IMove } from './IMove';
import { IPokemon } from './IPokemon';
import { IStat } from './IStat';

export interface ICard {
  pokemon: IPokemon | undefined;
  stats: IStat[] | undefined;
  moves: IMove[] | undefined;
}
