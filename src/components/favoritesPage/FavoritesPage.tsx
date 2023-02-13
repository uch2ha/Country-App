import React, { useState, useEffect } from 'react';
import { ICountry } from '../../interfaces/country.interface';
import { RootContainer } from '../../sxStyles';
import { Box } from '@mui/material';
import NavBar from '../navBar/NavBar';
import CountriesGrid from '../countriesGrid/CountriesGrid';
import { fetchLocalStorage } from '../../functions/localStorage.fn';

const FavoritesPage: React.FC = () => {
  const [lSData, setLSData] = useState<ICountry[]>([]);
  const [data, setData] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>('');

  // get all countries from localStorage
  useEffect(() => {
    getAllCountries();
  }, []);

  // get fav countries by name, if name is empty get all fav countries
  useEffect(() => {
    if (search === '') {
      getAllCountries();
    } else {
      getCountriesByName(search);
    }
  }, [search]);

  const getAllCountries = () => {
    const data = fetchLocalStorage();
    setLSData(data);
    setData(data);
  };

  const getCountriesByName = async (name: string) => {
    const filteredData = lSData.filter(
      (el: ICountry) =>
        el.common_name.toLowerCase().includes(name.toLowerCase()) ||
        el.official_name.toLowerCase().includes(name.toLowerCase())
    );

    setData(filteredData);
  };

  return (
    <Box sx={RootContainer}>
      <NavBar search={search} setSearch={setSearch} favPage={true} />
      <CountriesGrid data={data} />
    </Box>
  );
};

export default FavoritesPage;
