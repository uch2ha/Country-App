import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountriesGrid from '../../components/countriesGrid/CountriesGrid';
import { BrowserRouter } from 'react-router-dom';

describe('CountriesGrid', () => {
  const countries = [
    {
      id: 'asd',
      common_name: 'Finland',
      official_name: 'Finland',
      capital: ['cap1', 'cap2'],
      region: 'Uusimaa',
      subregion: 'subregion',
      latlng: ['11', '22'],
      googleMaps: 'string',
      population: 123,
      area: 456,
      languages: ['Language 1', 'Language 2'],
      independent: true,
      flag: 'https://flag.com/flag1.png',
    },
    {
      id: 'qwe',
      common_name: 'Country 2',
      official_name: 'Country 2',
      capital: ['cap1', 'cap2'],
      region: 'Something',
      subregion: 'subregion',
      latlng: ['11', '22'],
      googleMaps: 'string',
      population: 456,
      area: 789,
      languages: ['Language 3', 'Language 4'],
      independent: true,
      flag: 'https://flag.com/flag2.png',
    },
  ];

  it('renders the data grid', async () => {
    render(
      <BrowserRouter>
        <CountriesGrid data={countries} />
      </BrowserRouter>
    );

    expect(screen.getByText(/Finland/i)).toBeInTheDocument();
    expect(screen.getByText(/Country 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Uusimaa/i)).toBeInTheDocument();
    expect(screen.getByText(/Something/i)).toBeInTheDocument();
  });

  it('renders the correct number of rows', () => {
    render(
      <BrowserRouter>
        <CountriesGrid data={countries} />
      </BrowserRouter>
    );

    const rows = screen.getAllByRole(/img/i);
    expect(rows).toHaveLength(countries.length);
  });

  it('renders the correct flag image', () => {
    render(
      <BrowserRouter>
        <CountriesGrid data={countries} />
      </BrowserRouter>
    );

    const flagImages = screen.getAllByRole('img');
    expect(flagImages[0]).toHaveAttribute('src', countries[0].flag);
    expect(flagImages[1]).toHaveAttribute('src', countries[1].flag);
  });
});
