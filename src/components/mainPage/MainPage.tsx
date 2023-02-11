import { Box } from '@mui/material';
import React from 'react';
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

const MainPage: React.FC = () => {
  const [pageSize, setPageSize] = React.useState<number>(4);
  const COLUMNS_COUNTRIES: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: '2', headerName: '2', flex: 1 },
    { field: '3', headerName: '3', flex: 1 },
  ];

  const test_data = [
    { id: 1, '2': 2, '3': 3 },
    { id: 1, '2': 2, '3': 3 },
    { id: 1, '2': 2, '3': 3 },
    { id: 1, '2': 2, '3': 3 },
    { id: 1, '2': 2, '3': 3 },
    { id: 1, '2': 2, '3': 3 },
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
        rows={test_data}
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
