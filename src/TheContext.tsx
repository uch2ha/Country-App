import { createContext, useState, FC, ReactNode, useEffect } from 'react';
import { IContext } from './interfaces/context.interface';
import { fetchAllCountries } from './fetchFunctions';
import { ICountry } from './interfaces/country.interface';

export const TheContext = createContext<IContext | null>(null);

interface IProps {
  children: ReactNode;
}

const TheContextProvider: FC<IProps> = ({ children }) => {
  const [data, setData] = useState<ICountry[]>([]);
  const [country, setCountry] = useState<ICountry | null>(null);

  // // get all countries
  // useEffect(() => {
  //   getAllCountries();
  // }, []);

  // const getAllCountries = async () => {
  //   const result = await fetchAllCountries();
  //   setData(result);
  // };

  return (
    <TheContext.Provider
      value={{
        country,
        setCountry,
      }}
    >
      {children}
    </TheContext.Provider>
  );
};

export default TheContextProvider;
