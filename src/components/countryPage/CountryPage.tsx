import React, { useContext, useState, useEffect } from 'react';
import { TheContext } from '../../TheContext';
import { ICountry } from '../../interfaces/country.interface';
import NavBar from '../navBar/NavBar';
import {
  CardBackBtn as CardCloseBtn,
  CountryCardContainer,
  CountryCardHeader,
  MainContainer,
} from '../../sxStyles';
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  CardActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';

const CountryPage: React.FC = () => {
  const [country, setCountry] = useState<ICountry | null>(null);

  const context = useContext(TheContext);
  const navigation = useNavigate();

  useEffect(() => {
    setCountryData();
  }, []);

  const setCountryData = () => {
    if (context?.country) setCountry(context?.country);
  };

  console.log(country);

  return (
    <Box sx={MainContainer}>
      <NavBar />
      <Card sx={CountryCardContainer}>
        <Box sx={{ width: '100%' }}>
          <CardHeader
            action={
              <IconButton
                aria-label='close'
                sx={CardCloseBtn}
                onClick={() => navigation(-1)}
              >
                <CloseIcon />
              </IconButton>
            }
            sx={CountryCardHeader}
            title={country?.common_name}
            subheader={country?.capital.join(',')}
          />
        </Box>
        <CardMedia>
          <img src={country?.flag} width={600} />
        </CardMedia>
        <CardContent>
          <Typography variant='body1' color='text.secondary'>
            The country belongs to {country?.region} region and{' '}
            {country?.subregion} sub-region. Located at the {country?.latlng[0]}{' '}
            °N and {country?.latlng[1]} °W, this country has population of{' '}
            {country?.population} and area of {country?.area} m². It has{' '}
            {country?.independent ? '' : 'not'} gained the independent,
            according to the CIA World Factbook
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ width: '90%' }}>
          <IconButton aria-label='maps'>
            <a href={country?.googleMaps} target='_blank'>
              <PlaceIcon />
            </a>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CountryPage;
