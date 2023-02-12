import { ICountry } from './country.interface';

export interface IContext {
  country: ICountry | null;
  setCountry: (country: ICountry | null) => void;
}
