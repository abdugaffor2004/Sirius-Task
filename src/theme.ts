import { createTheme } from '@mantine/core';

export const theme = createTheme({
  components: {
    TextInput: {
      styles: () => ({
        label: {
          marginBottom: '0.625rem',
          fontSize: '1rem',
        },
      }),
    },
    Textarea: {
      styles: () => ({
        label: {
          marginBottom: '0.625rem',
          fontSize: '1rem',
        },
      }),
    },
    DateInput: {
      styles: () => ({
        label: {
          marginBottom: '0.625rem',
          fontSize: '1rem',
        },
      }),
    },
    RadioGroup: {
      styles: () => ({
        label: {
          marginBottom: '0.625rem',
          fontSize: '1rem',
        },
      }),
    },
  },

  colors: {
    danger: [
      ' #fadee0',
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
