import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from 'components/AppLayout/AppLayout';
import HomePage from 'pages/HomePage/HomePage';
import AddressPage from 'pages/AddressPage/AddressPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="address" element={<AddressPage />} />
        <Route path="404" element={<div>Not Found</div>} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
