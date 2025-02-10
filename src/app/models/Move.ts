import { IMove } from './interfaces/IMove';

export class Move implements IMove {
  move: string | undefined;
  type: string | undefined;
  category: string | undefined;
  powerPoints: number | undefined;
  basePower: number | undefined;
  accuracy: number | undefined;
  battleEffect: string | undefined;
  secondaryEffect: string | undefined;
  secondaryRate: number | undefined;
  criticalRate: number | undefined;
  speedPriority: number | undefined;
}
