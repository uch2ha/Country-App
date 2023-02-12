import { SxProps } from '@mui/material';

// root
export const MainContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
};

// NavBar

export const NavContainer: SxProps = {
  width: '95%',
  height: '7rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'transparent',
};

export const NavLogo: SxProps = {
  fontFamily: 'Fearce',
  fontSize: '1.5rem',
};

export const NavSearch: SxProps = {
  '& .MuiInputLabel-root': { color: 'white' }, //styles the label
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { borderColor: 'white' },
  },
};

// Main page

export const CountriesGrid: SxProps = {
  width: '95%',
  marginBottom: '2rem',
  color: '#f7f7f7',
  '& .MuiTablePagination-root': { color: 'white' },

  '& .MuiDataGrid-row: hover': {
    cursor: 'pointer',
    backgroundColor: 'rgb(85, 85, 85)',
  },
};

// Country page

export const CountryCardContainer: SxProps = {
  marginBlock: '3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  overflow: 'scroll',
};

export const CountryCardHeader: SxProps = {
  minHeight: '4rem',
  backgroundColor: '#c9c9c9',
  paddingInline: '2rem',
};
export const CardBackBtn: SxProps = {
  marginTop: '1rem',
};
export const CountryCardImg: SxProps = {
  marginBlock: '1rem',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
};
export const CountryCardTextContaner: SxProps = {
  padding: '0',
  paddingInline: '2rem',
  fontSize: '2rem',
};
export const CountryCardText: SxProps = {
  fontSize: '1.3rem',
  color: '#0f0f0f',
};
export const CountryCardMapBtnContainer: SxProps = {
  width: '100%',
};
export const CountryCardMapBtn: SxProps = {
  padding: '0',
  paddingLeft: '2rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  color: '#989898',
};
