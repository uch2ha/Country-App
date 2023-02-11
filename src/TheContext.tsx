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

  // useEffect(() => {
  //   fetchCountries();
  // }, []);

  // const fetchCountries = async () => {
  //   setData(await fetchAllCountries());
  // };

  return (
    <TheContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </TheContext.Provider>
  );
};

export default TheContextProvider;
