import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RootProvider } from './RootProvider.tsx';
import { App } from './App.tsx';
import { NavigationProgress } from '@mantine/nprogress';

import './index.css';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/dates/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootProvider>
      <NavigationProgress />
      <App />
    </RootProvider>
  </StrictMode>
);
