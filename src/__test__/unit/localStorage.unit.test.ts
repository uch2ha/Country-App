import {
  updateLocalStorage,
  fetchLocalStorage,
  checkIsFavorite,
  removeOneItemLocalStorage,
  removeAllLocalStorage,
} from '../../functions/localStorage.fn';
import { ICountry } from '../../interfaces/country.interface';

const country: ICountry = {
  id: '1',
  common_name: 'country1',
  official_name: 'Official Country 1',
  capital: ['Capital 1'],
  region: 'Region 1',
  subregion: 'Subregion 1',
  latlng: ['1', '2'],
  googleMaps: 'https://maps.google.com/?q=1,2',
  population: 1000,
  area: 100,
  languages: ['Language 1'],
  independent: true,
  flag: 'https://flag1.com',
};

describe('updateLocalStorage', () => {
  beforeEach(() => localStorage.removeItem('CountriesData'));
  it('should add item to local storage', () => {
    updateLocalStorage(country);
    const stringData = localStorage.getItem('CountriesData');
    if (stringData) {
      const data = JSON.parse(stringData);
      expect(data).toEqual([country]);
    }
  });

  it('should remove item from local storage if it already exists', () => {
    updateLocalStorage(country);
    updateLocalStorage(country);
    const stringData = localStorage.getItem('CountriesData');
    if (stringData) {
      const data = JSON.parse(stringData);
      expect(data).toEqual([]);
    }
  });
});

describe('fetchLocalStorage', () => {
  beforeEach(() => localStorage.removeItem('CountriesData'));
  it('should return an empty array if local storage is empty', () => {
    const data = fetchLocalStorage();
    expect(data).toEqual([]);
  });

  it('should return data from local storage if it exists', () => {
    updateLocalStorage(country);
    const data = fetchLocalStorage();
    expect(data).toEqual([country]);
  });
});

describe('checkIsFavorite', () => {
  beforeEach(() => localStorage.removeItem('CountriesData'));
  it('should return false if local storage is empty', () => {
    const isFavorite = checkIsFavorite(country.official_name);
    expect(isFavorite).toBe(false);
  });

  it('should return false if country does not exist in local storage', () => {
    updateLocalStorage(country);
    const isFavorite = checkIsFavorite('Other Country');
    expect(isFavorite).toBe(false);
  });

  it('should return true if country exists in local storage', () => {
    updateLocalStorage(country);
    const isFavorite = checkIsFavorite(country.official_name);
    expect(isFavorite).toBe(true);
  });
});

describe('removeOneItemLocalStorage,', () => {
  beforeEach(() => localStorage.removeItem('CountriesData'));
  it('should remove one fav countries', () => {
    updateLocalStorage(country);
    removeOneItemLocalStorage(country.official_name);
    const data = fetchLocalStorage();
    expect(data).toEqual([]);
  });

  it('should Not remove one fav countries', () => {
    updateLocalStorage(country);
    removeOneItemLocalStorage('wrong name');
    const data = fetchLocalStorage();
    expect(data).toEqual([country]);
  });
});

describe('removeAllLocalStorage,', () => {
  beforeEach(() => localStorage.removeItem('CountriesData'));
  it('should remove all fav countries', () => {
    updateLocalStorage(country);
    removeAllLocalStorage();
    const data = fetchLocalStorage();
    expect(data).toEqual([]);
  });
});
