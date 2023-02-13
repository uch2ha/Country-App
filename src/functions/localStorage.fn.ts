import { ICountry } from '../interfaces/country.interface';

// add item to local storage array
export const updateLocalStorage = (item: ICountry): void => {
  const stringData = localStorage.getItem('CountriesData');

  // if local storage is empty add first item to it
  if (!stringData)
    return localStorage.setItem('CountriesData', JSON.stringify([item]));

  const data = JSON.parse(stringData);

  // let isDuplicate = false;

  // // check if array contains same item as current
  // data.forEach((el: ICountry) => {
  //   const { common_name, official_name } = el;
  //   const {
  //     cartValue: cartValue2,
  //     distance: distance2,
  //     itemsAmount: itemsAmount2,
  //     userDate: userDate2,
  //   } = item;

  //   if (
  //     cartValue === cartValue2 &&
  //     distance === distance2 &&
  //     itemsAmount === itemsAmount2 &&
  //     userDate === userDate2
  //   ) {
  //     isDuplicate = true;
  //   }
  // });

  // if (isDuplicate) return;

  data.push(item);

  //set updated array of items to local storage
  return localStorage.setItem('CountriesData', JSON.stringify(data));
};

// get and return data from local storage
export const fetchLocalStorage = (): ICountry[] => {
  const stringData = localStorage.getItem('CountriesData');

  if (!stringData) return [];

  const data = JSON.parse(stringData);

  return data;
};

// check if the country exist in fav list
export const checkIsFavorite = (id: string): boolean => {
  const stringData = localStorage.getItem('CountriesData');

  if (!stringData) return false;

  const data = JSON.parse(stringData);

  let isFavorite = false;

  data.every((item: ICountry) => {
    if (item.id === id) {
      isFavorite = true;
      // stop loop
      return false;
    }
    return true;
  });

  return isFavorite;
};

//removes a single item from local storage based on its id
export const removeOneItemLocalStorage = (id: string): void => {
  const stringData = localStorage.getItem('CountriesData');

  if (!stringData) return;

  const data = JSON.parse(stringData);

  const updatedData = data.filter((el: ICountry) => el.id !== id);

  localStorage.setItem('CountriesData', JSON.stringify(updatedData));
};

export const removeAllLocalStorage = (): void => {
  localStorage.removeItem('CountriesData');
};
