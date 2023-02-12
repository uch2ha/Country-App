import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { NavContainer, NavLogo, NavSearch } from '../../sxStyles';

interface INavBar {
  search?: string;
  handleSearch?: React.ChangeEventHandler<HTMLInputElement>;
}

const NavBar: React.FC<INavBar> = ({ search, handleSearch }) => {
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
        <TextField
          inputProps={{
            style: { color: 'white' },
            root: {
              borderColor: 'orange',
            },
          }}
          label='Search'
          sx={NavSearch}
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
        />
      )}
    </Box>
  );
};

export default NavBar;
