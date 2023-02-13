import ky from 'ky';
import { v4 as uuidv4 } from 'uuid';
import { ICountry } from './interfaces/country.interface';

//  filter to get only needed data and add the id property to each
const filterData = (countries: any[]): ICountry[] => {
  return countries.map((country: any) => {
    const id = uuidv4();
    const common_name = country.name.common as string;
    const official_name = country.name.official as string;
    const region = country.region as string;
    const subregion = country.subregion as string;
    const capital = country.capital as string[];
    const googleMaps = country.maps.googleMaps as string;
    const population = country.population as number;
    const area = country.area as number;
    const flag = country.flags.png as string;
    const latlng = country.latlng as string[];
    const independent = country.independent as boolean;
    let languages = ['none'] as string[];
    // if country has languages then add them, if not use "none" property
    if (country.languages) {
      languages = Object.values(country.languages);
    }

    return {
      id,
      common_name,
      official_name,
      region,
      subregion,
      capital,
      googleMaps,
      population,
      area,
      flag,
      latlng,
      independent,
      languages,
    };
  });
};

export const fetchAllCountries = async (): Promise<ICountry[]> => {
  try {
    const data: any = await ky.get('https://restcountries.com/v3.1/all').json();

    const filteredData: ICountry[] = filterData(data);

    return filteredData;
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
};

export const fetchCountriesByName = async (
  name: string
): Promise<ICountry[] | []> => {
  try {
    const data: any = await ky
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .json();

    const filteredData: ICountry[] = filterData(data);

    return filteredData;
  } catch (error) {
    // if country was not found returh empty array
    return [];
  }
};
