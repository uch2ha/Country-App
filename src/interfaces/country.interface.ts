export interface ICountry {
  id: string;
  common_name: string;
  official_name: string;
  capital: string[];
  region: string;
  subregion: string;
  latlng: string[];
  googleMaps: string;
  population: number;
  area: number;
  languages: string[];
  independent: boolean;
  flag: string;
}
