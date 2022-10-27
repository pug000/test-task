import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from 'components/AppLayout/AppLayout';
import HomePage from 'pages/HomePage/HomePage';
import AddressPage from 'pages/AddressPage/AddressPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="address" element={<AddressPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
