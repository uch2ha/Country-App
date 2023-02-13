import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';
import CountryPage from '../../components/countryPage/CountryPage';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../components/navBar/NavBar', () =>
  jest.fn(() => <div>NavBar component</div>)
);

describe('CountryPage component', () => {
  afterEach(cleanup);

  it('renders the component', () => {
    const { asFragment } = render(<CountryPage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the static text', () => {
    const { getByText } = render(<CountryPage />);

    expect(getByText(/The country/i)).toBeInTheDocument();
    expect(getByText(/independent/i)).toBeInTheDocument();
    expect(getByText(/CIA World Factbook/i)).toBeInTheDocument();
  });

  it('navigates back when close button is clicked', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByLabelText } = render(<CountryPage />);

    fireEvent.click(getByLabelText('close'));

    expect(navigate).toHaveBeenCalledWith(-1);
  });
});
