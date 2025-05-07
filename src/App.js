import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Write from './assets/components/Todo'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Write />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
