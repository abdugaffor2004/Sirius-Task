import { MantineProvider } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { theme } from './theme';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

interface RootProviderProps {
  children: ReactNode;
}

export const RootProvider: FC<RootProviderProps> = ({ children }) => (
  <MantineProvider theme={theme}>
    <ReduxProvider store={store}>{children}</ReduxProvider>
  </MantineProvider>
);
