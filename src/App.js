import { Route, Routes } from "react-router-dom";
import {Navbar, Footer} from './Components'
import {Home, Login, SignUp, Logout, NotFound, Dashboard, Main, Explore, Notifications, Bookmarks, Profile} from './Pages'
import Mockman from "mockman-js";
import "./App.css";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "./Utilities"
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

          <Route path='/main' element={<Main setMode={setMode} mode={mode} />} >
            <Route path='' element={<Dashboard />} />
            <Route path='explore' element={<Explore />} />
            <Route path='notifications' element={<Notifications />} />
            <Route path='bookmarks' element={<Bookmarks />} />
            <Route path='profile' element={<Profile />} />
          </Route> 

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
