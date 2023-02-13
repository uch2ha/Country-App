import React, { useContext } from 'react';
import TheContextProvider, { TheContext } from './TheContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import CountryPage from './components/countryPage/CountryPage';
import FavoritesPage from './components/favoritesPage/FavoritesPage';

const App: React.FC = () => {
  // if you try to open one country page without country data in context
  // you will be redirected to the main page
  const ProtectedRouteNoCounryData: React.FC<any> = (props) => {
    const context = useContext(TheContext);
    return context?.country ? props.children : <Navigate to='/' />;
  };

  return (
    <TheContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route
            path='/country'
            element={
              <ProtectedRouteNoCounryData>
                <CountryPage />
              </ProtectedRouteNoCounryData>
            }
          />
        </Routes>
      </BrowserRouter>
    </TheContextProvider>
  );
};

export default App;
