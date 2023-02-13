import { SxProps } from '@mui/material';

// root
export const RootContainer: SxProps = {
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
  minHeight: '7rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'transparent',
};

export const NavLogo: SxProps = {
  color: '#f7f7f7',
  fontFamily: 'Fearce',
  fontSize: '1.5rem',
};

export const NavRightSide: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
export const NavLikeBtn: SxProps = {
  height: '56px',
  marginRight: '2rem',
  fontSize: '1.1rem',
};

export const NavSearch: SxProps = {
  marginLeft: '2rem',
  '& .MuiInputLabel-root': { color: 'white' }, //styles the label
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { borderColor: 'white' },
  },
};

// Main page

export const CountriesGridData: SxProps = {
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

export const CountryPageContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80%',
};

export const CountryCardContainer: SxProps = {
  margintop: '1rem',
  marginBottom: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  overflow: 'scroll',

  /* Remove scrollbar from country page only */
  '&::-webkit-scrollbar': {
    display: 'none',
  },
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
