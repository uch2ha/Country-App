import React, { useState, useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import { ICountry } from '../../interfaces/country.interface';
import { TheContext } from '../../TheContext';
import { fetchAllCountries, fetchCountriesByName } from '../../fetchFunctions';
import { MainContainer } from '../../sxStyles';

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

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;

    if (text === '') return setSearch('');

    // accept only letters | - | () | , | spaces
    const regex = /(^[A-Za-z-(), ]+$)/g;

    if (!text.match(regex)) return;

    if (text.length > 20) return;

    setSearch(text);
  };

  return (
    <Box sx={MainContainer}>
      <NavBar search={search} handleSearch={handleSearch} />
      <CountriesGrid data={data} />
    </Box>
  );
};

export default MainPage;
