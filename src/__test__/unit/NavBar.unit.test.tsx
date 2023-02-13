import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../../components/navBar/NavBar';
import { BrowserRouter } from 'react-router-dom';

interface INavBar {
  search?: string;
  setSearch?: Function;
  favPage?: boolean;
}

describe('NavBar component', () => {
  let props: INavBar;

  beforeEach(() => {
    props = {
      search: '',
      setSearch: jest.fn(),
      favPage: false,
    };
  });

  it('renders without crashing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar {...props} />
      </BrowserRouter>
    );
    expect(
      getByText(/Dmitry Sinyavskiy \| Countries App/i)
    ).toBeInTheDocument();
  });

  it('renders the NavSearch TextField when handleSearch is provided', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <NavBar {...props} />
      </BrowserRouter>
    );
    expect(getByLabelText(/search/i)).toBeInTheDocument();
  });

  it('calls handleSearch function when the value of the TextField changes', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <NavBar {...props} />
      </BrowserRouter>
    );
    const input = getByLabelText(/search/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(props.setSearch).toHaveBeenCalled();
  });
});
