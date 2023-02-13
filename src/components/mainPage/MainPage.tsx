import React, { useState, useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import { ICountry } from '../../interfaces/country.interface';
import { TheContext } from '../../TheContext';
import {
  fetchAllCountries,
  fetchCountriesByName,
} from '../../functions/fetchFunctions.fn';
import { RootContainer } from '../../sxStyles';

import NavBar from '../navBar/NavBar';
import CountriesGrid from '../countriesGrid/CountriesGrid';

const MainPage: React.FC = () => {
  const [data, setData] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>('');

  const context = useContext(TheContext);

  // get all countries
  useEffect(() => {
    getAllCountries();
    context?.setCountry(null);
  }, []);

  // get countries by name, if name is empty search for all countries
  useEffect(() => {
    if (search === '') {
      getAllCountries();
    } else {
      getCountriesByName(search);
    }
  }, [search]);

  const getAllCountries = async () => {
    setData(await fetchAllCountries());
  };

  const getCountriesByName = async (name: string) => {
    setData(await fetchCountriesByName(name));
  };

  return (
    <Box sx={RootContainer}>
      <NavBar search={search} setSearch={setSearch} />
      <CountriesGrid data={data} />
    </Box>
  );
};

export default MainPage;
