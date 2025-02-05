export interface ICard {
  id?: number | undefined;
  no: string | undefined;
  picSmall: string | undefined;
  picLarge: string | undefined;
  name: string | undefined;
  descriptionViolet: string | undefined;
  descriptionScarlet: string | undefined;
  types: string[] | undefined;
  abilities: string[] | undefined;
  hp: number | undefined;
  att: number | undefined;
  def: number | undefined;
  sAtt: number | undefined;
  sDef: number | undefined;
  spd: number | undefined;
}
