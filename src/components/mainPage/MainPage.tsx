import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { ICountry } from '../../interfaces/country.interface';
import { Stack } from '@mui/system';
import { TheContext } from '../../TheContext';
import { useNavigate } from 'react-router-dom';
import { fetchAllCountries, fetchCountriesByName } from '../../fetchFunctions';
import { CountriesGrid, MainContainer } from '../../sxStyles';

import NavBar from '../navBar/NavBar';

const MainPage: React.FC = () => {
  const [data, setData] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>('');
  const [pageSize, setPageSize] = useState<number>(5);

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

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;

    if (text === '') return setSearch('');

    // accept only letters | - | () | , | spaces
    const regex = /(^[A-Za-z-(), ]+$)/g;

    if (!text.match(regex)) return;

    if (text.length > 20) return;

    setSearch(text);
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
      sortable: false,
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
      sortable: false,
    },
  ];

  return (
    <Box sx={MainContainer}>
      <NavBar search={search} handleSearch={handleSearch} />
      <DataGrid
        columns={COLUMNS_COUNTRIES}
        rowHeight={170}
        rows={data}
        sx={CountriesGrid}
        pageSize={pageSize}
        onCellClick={(params) => handleCellClick(params.row)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20, 40, 80]}
        pagination
      ></DataGrid>
    </Box>
  );
};

export default MainPage;
