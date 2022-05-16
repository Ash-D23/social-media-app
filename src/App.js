import { Route, Routes } from "react-router-dom";
import {Navbar, Footer} from './Components'
import {Home, Login, SignUp, Logout, NotFound} from './Pages'
import Mockman from "mockman-js";
import "./App.css";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "./Utilities/theme";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme(getDesignTokens(mode))

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/signup' element={<SignUp />} />

          <Route path='/logout' element={<Logout />} />

          <Route path="/testApi" element={<Mockman />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Box>
    </ThemeProvider>
    
  );
}

export default App;
