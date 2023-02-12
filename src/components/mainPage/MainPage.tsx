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
import { fetchAllCountries, fetchCountriesByName } from '../../fetchFunctions';
import { Stack } from '@mui/system';
import { TheContext } from '../../TheContext';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const [data, setData] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>('');
  const [pageSize, setPageSize] = useState<number>(4);

  const context = useContext(TheContext);
  const navigation = useNavigate();

  // get all countries
  useEffect(() => {
    getAllCountries();
    context?.setCountry(null);
  }, []);

  // get countries by name, if name is empty seatch for all countries
  useEffect(() => {
    if (search === '') {
      getAllCountries();
    } else {
      getCountriesByName(search);
    }
  }, [search]);

  const getAllCountries = async () => {
    setData(await fetchAllCountries());
  };

  const getCountriesByName = async (name: string) => {
    setData(await fetchCountriesByName(name));
  };

  const handleCellClick = (data: ICountry) => {
    context?.setCountry(data);
    navigation('/country');
  };

  const COLUMNS_COUNTRIES: GridColDef[] = [
    {
      field: 'flag',
      headerName: 'Flag',
      flex: 1,
      minWidth: 400,
      renderCell: (params) => <img src={params.value} width={200} />,
    },
    { field: 'common_name', headerName: 'Name', flex: 1 },
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
            <Typography key={index}>{language}</Typography>
          ))}
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={MainContainer}>
      <Box sx={NavContainer}>
        <Typography sx={NavLogo}>Dmitry Sinyavskiy Countries App</Typography>
        <TextField
          sx={NavSearch}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <DataGrid
        columns={COLUMNS_COUNTRIES}
        rowHeight={175}
        rows={data}
        sx={CountriesGrid}
        pageSize={pageSize}
        onCellClick={(params) => handleCellClick(params.row)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[4, 8, 12, 16, 20]}
        pagination
      ></DataGrid>
    </Box>
  );
};

export default MainPage;
