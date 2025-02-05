import { ICard } from '../interfaces/Icard';
import {
  isNullOrUndefined,
  splitStringToStringArray,
} from '../utils/helpers';

export class Card implements ICard {
  // #region private fields

  private _abilities: string[] | undefined;
  private _types: string[] | undefined;
  private _id?: number | undefined;
  private _no: string | undefined;
  private _picSmall: string | undefined;
  private _picLarge: string | undefined;
  private _name: string | undefined;
  private _hp: number | undefined;
  private _att: number | undefined;
  private _def: number | undefined;
  private _sAtt: number | undefined;
  private _sDef: number | undefined;
  private _spd: number | undefined;
  private _descriptionViolet: string | undefined;
  private _descriptionScarlet: string | undefined;

  // #endregion

  // #region private properties

  get abilities(): any {
    return isNullOrUndefined(this._abilities) ? [] : this._abilities;
  }
  set abilities(value: string) {
    this._abilities = splitStringToStringArray(value);
  }

  get types(): any {
    return isNullOrUndefined(this._types) ? [] : this._types;
  }
  set types(value: string) {
    this._types = splitStringToStringArray(value);
  }

  get id(): any {
    return isNullOrUndefined(this._id) ? null : this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get no(): any {
    return isNullOrUndefined(this._no) ? '' : this._no;
  }
  set no(value: string) {
    this._no = value;
  }

  get picSmall(): any {
    return isNullOrUndefined(this._picSmall) ? '' : this._picSmall;
  }
  set picSmall(value: string) {
    this._picSmall = value;
  }

  get picLarge(): any {
    return isNullOrUndefined(this._picLarge) ? '' : this._picLarge;
  }
  set picLarge(value: string) {
    this._picLarge = value;
  }

  get name(): any {
    return isNullOrUndefined(this._name) ? '' : this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get hp(): any {
    return isNullOrUndefined(this._hp) ? null : this._hp;
  }
  set hp(value: number) {
    this._hp = value;
  }

  get att(): any {
    return isNullOrUndefined(this._att) ? null : this._att;
  }
  set att(value: number) {
    this._att = value;
  }

  get def(): any {
    return isNullOrUndefined(this._def) ? null : this._def;
  }
  set def(value: number) {
    this._def = value;
  }

  get sAtt(): any {
    return isNullOrUndefined(this._sAtt) ? null : this._sAtt;
  }
  set sAtt(value: number) {
    this._sAtt = value;
  }

  get sDef(): any {
    return isNullOrUndefined(this._sDef) ? null : this._sDef;
  }
  set sDef(value: number) {
    this._sDef = value;
  }

  get spd(): any {
    return isNullOrUndefined(this._spd) ? null : this._spd;
  }
  set spd(value: number) {
    this._spd = value;
  }

  get descriptionViolet(): any {
    return isNullOrUndefined(this._descriptionViolet) ? '' : this._descriptionViolet;
  }
  set descriptionViolet(value: string) {
    this._descriptionViolet = value;
  }

  get descriptionScarlet(): any {
    return isNullOrUndefined(this._descriptionScarlet) ? '' : this._descriptionScarlet;
  }
  set descriptionScarlet(value: string) {
    this._descriptionScarlet = value;
  }

  // #endregion

  constructor() {}
}
