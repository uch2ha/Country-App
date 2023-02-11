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
import { Stack } from '@mui/system';
import { Paragliding } from '@mui/icons-material';

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
    {
      field: 'flag',
      headerName: 'Flag',
      flex: 1,
      minWidth: 400,
      renderCell: (params) => <img src={params.value} width={200} />,
    },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'region', headerName: 'Region', flex: 1 },
    { field: 'population', headerName: 'Population', flex: 1 },
    {
      field: 'languages',
      headerName: 'Languages',
      flex: 1,
      type: 'string',
      renderCell: (params) => (
        <Stack direction='column' spacing={1}>
          {params.value.map((language: string, index: number) => (
            <Typography>{language}</Typography>
          ))}
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={MainContainer}>
      <Box sx={NavContainer}>
        <Typography sx={NavLogo}>Dmitry Sinyavskiy Countries App</Typography>
        <TextField sx={NavSearch} />
      </Box>
      <DataGrid
        columns={COLUMNS_COUNTRIES}
        rowHeight={175}
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
