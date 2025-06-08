import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import App from './App.tsx';

import { createTheme, MantineProvider } from '@mantine/core';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store.ts';
import { BrowserRouter, Route, Routes } from 'react-router';

const theme = createTheme({
  colors: {
    danger: [
      ' #fdeeef',
      ' #e12828',
      ' #e12828',
      ' #e12828',
      ' #e12828',
      ' #e12828',
      ' #e12828',
      ' #e12828',
      ' #e12828',
      ' #e12828',
    ],
    primary: [
      ' #c7e4fc',
      ' #7abef8',
      ' #45a5f6',
      ' #45a5f6',
      ' #45a5f6',
      ' #45a5f6',
      ' #45a5f6',
      ' #45a5f6',
      ' #45a5f6',
      ' #45a5f6',
    ],

    secondary: [
      ' #a0a9b8',
      ' #a0a9b8',
      ' #a0a9b8',
      ' #a0a9b8',
      ' #a0a9b8',
      ' #a0a9b8',
      ' #a0a9b8',
      ' #a0a9b8',
      ' #a0a9b8',
      ' #a0a9b8',
    ],

    'font-main': [
      ' #3a353e',
      ' #3a353e',
      ' #3a353e',
      ' #3a353e',
      ' #3a353e',
      ' #3a353e',
      ' #3a353e',
      ' #3a353e',
      ' #3a353e',
      ' #3a353e',
    ],
    'font-secondary': [
      ' #293244',
      ' #293244',
      ' #293244',
      ' #293244',
      ' #293244',
      ' #293244',
      ' #293244',
      ' #293244',
      ' #293244',
      ' #293244',
    ],
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
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
