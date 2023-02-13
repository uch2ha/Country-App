import React, { useState, useEffect } from 'react';
import { ICountry } from '../../interfaces/country.interface';
import { RootContainer } from '../../sxStyles';
import { Box } from '@mui/material';
import NavBar from '../navBar/NavBar';
import CountriesGrid from '../countriesGrid/CountriesGrid';
import { fetchLocalStorage } from '../../functions/localStorage.fn';

const FavoritesPage: React.FC = () => {
  const [data, setData] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>('');

  // get all countries from localStorage
  useEffect(() => {
    getAllCountries();
  }, []);

  // // get countries by name, if name is empty search for all countries
  // useEffect(() => {
  //   if (search === '') {
  //     getAllCountries();
  //   } else {
  //     getCountriesByName(search);
  //   }
  // }, [search]);

  const getAllCountries = () => {
    setData(fetchLocalStorage());
  };

  // const getCountriesByName = async (name: string) => {
  //   setData(await fetchCountriesByName(name));
  // };

  return (
    <Box sx={RootContainer}>
      <NavBar search={search} setSearch={setSearch} />
      <CountriesGrid data={data} />
    </Box>
  );
};

export default FavoritesPage;
