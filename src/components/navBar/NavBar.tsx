import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import {
  NavContainer,
  NavLikeBtn,
  NavLogo,
  NavRightSide,
  NavSearch,
} from '../../sxStyles';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LanguageIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';

interface INavBar {
  search?: string;
  handleSearch?: React.ChangeEventHandler<HTMLInputElement>;
}

const NavBar: React.FC<INavBar> = ({ search, handleSearch }) => {
  const navigation = useNavigate();

  return (
    <Box
      sx={NavContainer}
      style={
        handleSearch
          ? {}
          : {
              justifyContent: 'center',
            }
      }
    >
      <a
        href='https://github.com/uch2ha/dmitry-sinyavskiy-countries-app'
        target='_blank'
      >
        <Typography sx={NavLogo}>
          Dmitry Sinyavskiy &nbsp;|&nbsp; Countries App
        </Typography>
      </a>
      {handleSearch && (
        <Box sx={NavRightSide}>
          <Button
            variant='outlined'
            sx={NavLikeBtn}
            endIcon={<LanguageIcon />}
            onClick={() => navigation('/')}
          >
            Main
          </Button>
          <Button
            variant='outlined'
            sx={NavLikeBtn}
            endIcon={<FavoriteBorderIcon />}
            onClick={() => navigation('/favorites')}
          >
            Favorites
          </Button>
          <TextField
            inputProps={{
              'data-testid': 'search-input',
              style: { color: 'white' },
              root: {
                borderColor: 'orange',
              },
            }}
            label='Search'
            sx={NavSearch}
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSearch(e)
            }
          />
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
