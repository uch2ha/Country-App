import { createContext, useState, FC, ReactNode, useEffect } from 'react';
import { IContext } from './interfaces/context.interface';
import { ICountry } from './interfaces/country.interface';

export const TheContext = createContext<IContext | null>(null);

interface IProps {
  children: ReactNode;
}

const TheContextProvider: FC<IProps> = ({ children }) => {
  const [country, setCountry] = useState<ICountry | null>(null);

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
