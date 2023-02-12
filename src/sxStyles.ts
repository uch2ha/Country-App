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

// Country page

export const CountryCardContainer: SxProps = {
  marginBlock: '3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  // minHeight: '50rem',
  overflow: 'scroll',
};

export const CountryCardHeader: SxProps = {
  minHeight: '4rem',
  backgroundColor: 'red',
  paddingInline: '2rem',
};
export const CardBackBtn: SxProps = {
  marginTop: '1rem',
};
