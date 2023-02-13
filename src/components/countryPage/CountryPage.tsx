import React, { useContext, useState, useEffect } from 'react';
import { TheContext } from '../../TheContext';
import NavBar from '../navBar/NavBar';
import {
  CardBackBtn as CardCloseBtn,
  CountryCardContainer,
  CountryCardHeader,
  CountryCardImg,
  CountryCardMapBtn,
  CountryCardText,
  RootContainer,
  CountryCardBtnContainer,
  CountryCardTextContaner,
  CountryPageContainer,
  CountryCardFavBtn,
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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import {
  updateLocalStorage,
  checkIsFavorite,
} from '../../functions/localStorage.fn';

const CountryPage: React.FC = () => {
  const [isFav, setIsFav] = useState(false);

  const context = useContext(TheContext);
  const navigation = useNavigate();

  useEffect(() => {
    updateFavState();
  }, []);

  const updateFavState = () => {
    setIsFav(checkIsFavorite(context?.country?.official_name));
  };

  return (
    <Box sx={RootContainer}>
      <NavBar />
      <Box sx={CountryPageContainer}>
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
              title={context?.country?.common_name}
              subheader={context?.country?.capital.join(',')}
            />
          </Box>
          <CardMedia sx={CountryCardImg}>
            <img src={context?.country?.flag} width={'275px'} />
          </CardMedia>
          <CardContent sx={CountryCardTextContaner}>
            <Typography
              sx={CountryCardText}
              variant='body1'
              color='text.secondary'
            >
              The country belongs to {context?.country?.region} region and{' '}
              {context?.country?.subregion} sub-region. Located at the{' '}
              {Number(context?.country?.latlng[0]).toFixed(2)} °N and{' '}
              {Number(context?.country?.latlng[1]).toFixed(2)} °W. This country
              has population of {context?.country?.population} and area of{' '}
              {context?.country?.area} m². It has{' '}
              {context?.country?.independent ? '' : 'not'} gained the
              independent, according to the CIA World Factbook
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={CountryCardBtnContainer}>
            <IconButton aria-label='maps' sx={CountryCardMapBtn}>
              <a
                href={context?.country?.googleMaps}
                target='_blank'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'gray',
                }}
              >
                <PlaceIcon sx={{ fontSize: 30, color: '#343434' }} />
                <Typography>{context?.country?.official_name}</Typography>
              </a>
            </IconButton>
            <IconButton
              aria-label='maps'
              sx={CountryCardFavBtn}
              onClick={
                // if country exists in local storage remove it
                // if not add it
                () => {
                  updateLocalStorage(context?.country);
                  updateFavState();
                }
              }
            >
              {isFav ? (
                <FavoriteIcon sx={{ fontSize: 35, color: 'red' }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: 35, color: 'red' }} />
              )}
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default CountryPage;
