import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../../components/navBar/NavBar';

describe('NavBar component', () => {
  let props;

  beforeEach(() => {
    props = {
      search: '',
      handleSearch: jest.fn(),
    };
  });

  it('renders without crashing', () => {
    const { getByText } = render(<NavBar {...props} />);
    expect(
      getByText(/Dmitry Sinyavskiy \| Countries App/i)
    ).toBeInTheDocument();
  });

  it('renders the NavSearch TextField when handleSearch is provided', () => {
    const { getByLabelText } = render(<NavBar {...props} />);
    expect(getByLabelText(/search/i)).toBeInTheDocument();
  });

  it('calls handleSearch function when the value of the TextField changes', () => {
    const { getByLabelText } = render(<NavBar {...props} />);
    const input = getByLabelText(/search/i);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(props.handleSearch).toHaveBeenCalled();
  });
});
