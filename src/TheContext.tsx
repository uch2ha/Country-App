import { createContext, useState, FC, ReactNode, useEffect } from 'react';
import { IContext } from './interfaces/context.interface';

export const TheContext = createContext<IContext | null>(null);

interface IProps {
  children: ReactNode;
}

const TheContextProvider: FC<IProps> = ({ children }) => {
  const user = 'Dima';

  return (
    <TheContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </TheContext.Provider>
  );
};

export default TheContextProvider;
