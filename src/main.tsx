import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@mantine/core/styles.css';
import App from './App.tsx';

import {  MantineProvider } from '@mantine/core';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store.ts';
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/questionnare" />
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </MantineProvider>
  </StrictMode>
);
