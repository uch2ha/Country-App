import ky from 'ky';
import { v4 as uuidv4 } from 'uuid';
import { ICountry } from './interfaces/country.interface';

export const fetchAllCountries = async (): Promise<ICountry[]> => {
  try {
    const data: any = await ky.get('https://restcountries.com/v3.1/all').json();

    // filter to get only need data and add it property
    const filteredData: ICountry[] = data.map((country: any) => {
      const name = country.name.official as string;
      const region = country.region as string;
      const population = country.population as number;
      const languages = country.languages as String[];
      const flag = country.flags.png as string;
      const id = uuidv4();

      return { id, name, region, population, languages, flag };
    });

    return filteredData;
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong ');
  }
};
