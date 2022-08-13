import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicial from './pages/Inicial/Inicial';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Inicial />
  </React.StrictMode>
);
