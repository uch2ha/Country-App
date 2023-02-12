import React, { useContext, useState, useEffect } from 'react';
import { TheContext } from '../../TheContext';
import { ICountry } from '../../interfaces/country.interface';

const CountryPage: React.FC = () => {
  const [country, setCountry] = useState<ICountry | null>(null);

  const context = useContext(TheContext);

  useEffect(() => {
    setCountryData();
  }, []);

  const setCountryData = () => {
    if (context?.country) setCountry(context?.country);
  };

  console.log(country);

  return <div>CountryPage</div>;
};

export default CountryPage;
