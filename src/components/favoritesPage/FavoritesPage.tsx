import React, { useContext, useState } from 'react';
import { ICountry } from '../../interfaces/country.interface';
import { TheContext } from '../../TheContext';
import { RootContainer } from '../../sxStyles';
import { Box } from '@mui/material';
import NavBar from '../navBar/NavBar';
import CountriesGrid from '../countriesGrid/CountriesGrid';

const FavoritesPage = () => {
  const [data, setData] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>('');

  const context = useContext(TheContext);

  return (
    <Box sx={RootContainer}>
      <NavBar search={search} setSearch={setSearch} />
      <CountriesGrid data={data} />
    </Box>
  );
};

export default FavoritesPage;
