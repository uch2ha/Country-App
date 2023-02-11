import { SxProps } from '@mui/material';

// Main page

export const MainContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
};

export const NavContainer: SxProps = {
  width: '100%',
  height: '5rem',
  borderBottom: '2px solid',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const NavLogo: SxProps = { paddingLeft: '3rem' };

export const NavSearch: SxProps = { paddingRight: '3rem' };

export const CountriesGrid: SxProps = {
  width: '100%',
  backgroundColor: 'white',
};
