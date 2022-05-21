import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Footer } from './Components'
import { Home, Login, SignUp, Logout, NotFound, Dashboard, Main, Explore, Notifications, Bookmarks, Profile } from './Pages'
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "./Utilities"
import Mockman from "mockman-js";
import "./App.css";
import { useLocalStorage } from "./hooks/LocalStorage";
import RequireAuth from './hooks/RequireAuth'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const [mode, setMode] = useLocalStorage("theme", "dark");

  const { user } = useSelector(state => state.user)

  const darkTheme = createTheme(getDesignTokens(mode))

  const location = useLocation()

  const pathName = location.state?.from || '/'

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Routes>

        { user ? <Route path="/" element={<Navigate to={"/main"} />} /> : <Route path="/" element={<Home />} /> }

        <Route path='/main' element={<RequireAuth><Main setMode={setMode} mode={mode} /></RequireAuth>} >
          <Route path='' element={<Dashboard />} />
          <Route path='explore' element={<Explore />} />
          <Route path='notifications' element={<Notifications/>} />
          <Route path='bookmarks' element={<Bookmarks />} />
          <Route path='profile/:id' element={<Profile />} />
        </Route>        

        { user ? <Route path='/login' element={<Navigate to={pathName} />} /> : <Route path='/login' element={<Login />} /> }
    
        { user ? <Route path='/signup' element={<Navigate to="/" />} /> : <Route path='/signup' element={<SignUp />} /> }
      
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
