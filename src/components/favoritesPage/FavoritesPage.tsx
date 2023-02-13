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
    <Box sx={RootContainer}>
      <NavBar search={search} handleSearch={handleSearch} />
      <CountriesGrid data={data} />
    </Box>
  );
};

export default FavoritesPage;
