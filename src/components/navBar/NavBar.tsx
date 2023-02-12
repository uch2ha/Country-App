import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { NavContainer, NavLogo, NavSearch } from '../../sxStyles';

interface INavBar {
  search?: string;
  handleSearch?: React.ChangeEventHandler<HTMLInputElement>;
}

const NavBar: React.FC<INavBar> = ({ search, handleSearch }) => {
  return (
    <Box sx={NavContainer}>
      <Typography sx={NavLogo}>Dmitry Sinyavskiy Countries App</Typography>
      {handleSearch && (
        <TextField
          sx={NavSearch}
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
        />
      )}
    </Box>
  );
};

export default NavBar;
