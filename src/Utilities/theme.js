export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          secondary: {
            main: '#1976d2',
          },
          text: {
            ascent: '#fff',
          }
        }
      : {
          // palette values for dark mode
          secondary: {
            main: '#121212',
            dark: '#f1f5f9'
          },
          text: {
            ascent: '#fff',
          }
        }),
  },
});