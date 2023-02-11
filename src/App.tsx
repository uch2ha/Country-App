import React from 'react';
import TheContextProvider from './TheContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import CountryPage from './components/countryPage/CountryPage';

const App: React.FC = () => {
  return (
    <TheContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/country' element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </TheContextProvider>
  );
};

export default App;
