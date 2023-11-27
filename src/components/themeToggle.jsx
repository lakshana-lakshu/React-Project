import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { CssBaseline } from '@mui/material';


const ThemeContext = createContext();


const lightTheme = createMuiTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createMuiTheme({
  palette: {
    mode: 'dark',
  },
});




export const ThemeApp = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme); 
  
    const toggleTheme = () => {
      setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  };
  
  const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <div style={{ display:'flex',marginRight:50,justifyContent:'flex-end',position:'absolute',right:'560px',color:'black' }}>
        <Button variant="contained" color="primary" onClick={toggleTheme}>
          {theme.palette.mode === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </Button>
      </div>
    );
  };
  
  export default ThemeToggle;