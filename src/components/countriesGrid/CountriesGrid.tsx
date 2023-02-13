import React, { useContext, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { ICountry } from '../../interfaces/country.interface';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { CountriesGridData } from '../../sxStyles';
import { TheContext } from '../../TheContext';
import { useNavigate } from 'react-router-dom';

interface ICountriesGrid {
  data: ICountry[];
}

const CountriesGrid: React.FC<ICountriesGrid> = ({ data }) => {
  const [pageSize, setPageSize] = useState<number>(5);

  const context = useContext(TheContext);
  const navigation = useNavigate();

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

  const handleCellClick = (data: ICountry) => {
    context?.setCountry(data);
    navigation('/country');
  };

  return (
    <>
      <DataGrid
        columns={COLUMNS_COUNTRIES}
        rowHeight={170}
        rows={data}
        sx={CountriesGridData}
        pageSize={pageSize}
        onCellClick={(params) => handleCellClick(params.row)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20, 40, 80]}
        pagination
      ></DataGrid>
    </>
  );
};

export default CountriesGrid;
