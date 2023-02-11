import ky from 'ky';
import { v4 as uuidv4 } from 'uuid';
import { ICountry } from './interfaces/country.interface';

// filter to get only need data and add id property to each
const filterData = (countries: any[]): ICountry[] => {
  return countries.map((country: any) => {
    const name = country.name.official as string;
    const region = country.region as string;
    const population = country.population as number;
    let languages = ['none'] as string[];
    // if country has languages then add them, if not use "none" property
    if (country.languages) {
      languages = Object.values(country.languages);
    }
    const flag = country.flags.png as string;
    const id = uuidv4();

    return { id, name, region, population, languages, flag };
  });
};

export const fetchAllCountries = async (): Promise<ICountry[]> => {
  try {
    const data: any = await ky.get('https://restcountries.com/v3.1/all').json();

    const filteredData: ICountry[] = filterData(data);

    return filteredData;
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong ');
  }
};

export const fetchCountriesByName = async (
  name: string
): Promise<ICountry[]> => {
  try {
    const data: any = await ky
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .json();

    const filteredData: ICountry[] = filterData(data);

    return filteredData;
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong ');
  }
};
