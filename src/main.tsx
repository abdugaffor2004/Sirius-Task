import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RootProvider } from './RootProvider.tsx';

import './index.css';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';
import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </StrictMode>
);
