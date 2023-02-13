import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from '../../components/mainPage/MainPage';
import { TheContext } from '../../TheContext';

jest.mock('../../fetchFunctions', () => ({
  fetchAllCountries: jest.fn(() => Promise.resolve([{ flag: 'flag-url' }])),
  fetchCountriesByName: jest.fn(() => Promise.resolve([{ flag: 'flag-url' }])),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn()),
}));

describe('MainPage', () => {
  it('renders the component', () => {
    const { container } = render(
      <TheContext.Provider value={{ setCountry: jest.fn() }}>
        <MainPage />
      </TheContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
