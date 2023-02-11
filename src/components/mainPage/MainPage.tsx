import { Box } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import {
  CountriesGrid,
  MainContainer,
  NavContainer,
  NavLogo,
  NavSearch,
} from '../../sxStyles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { ICountry } from '../../interfaces/country.interface';
import { TheContext } from '../../TheContext';
import { fetchAllCountries } from '../../fetchFunctions';

const MainPage: React.FC = () => {
  const [data, setData] = useState<ICountry[]>([]);
  const [pageSize, setPageSize] = useState<number>(4);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    setData(await fetchAllCountries());
  };

  const COLUMNS_COUNTRIES: GridColDef[] = [
    { field: 'flag', headerName: 'Flag', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'region', headerName: 'Region', flex: 1 },
    { field: 'population', headerName: 'Population', flex: 1 },
    { field: 'languages', headerName: 'Languages', flex: 1 },
  ];

  return (
    <Box sx={MainContainer}>
      <Box sx={NavContainer}>
        <Typography sx={NavLogo}>Dmitry Sinyavskiy Countries App</Typography>
        <TextField sx={NavSearch} />
      </Box>
      <DataGrid
        columns={COLUMNS_COUNTRIES}
        // getRowHeight={() => 'auto'}
        rows={data}
        sx={CountriesGrid}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[4, 8, 12, 16, 20]}
        pagination
      ></DataGrid>
    </Box>
  );
};

export default MainPage;
