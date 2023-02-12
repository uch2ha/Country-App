import React, { useContext, useState, useEffect } from 'react';
import { TheContext } from '../../TheContext';
import { ICountry } from '../../interfaces/country.interface';
import NavBar from '../navBar/NavBar';
import { MainContainer } from '../../sxStyles';
import { Box, Typography } from '@mui/material';

const CountryPage: React.FC = () => {
  const [country, setCountry] = useState<ICountry | null>(null);

  const context = useContext(TheContext);

  useEffect(() => {
    setCountryData();
  }, []);

  const setCountryData = () => {
    if (context?.country) setCountry(context?.country);
  };

  return (
    <Box sx={MainContainer}>
      <NavBar />
      123
    </Box>
  );
};

export default CountryPage;
