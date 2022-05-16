import { Route, Routes } from "react-router-dom";
import {Navbar, Footer} from './Components'
import {Home, Login, SignUp, Logout, NotFound} from './Pages'
import Mockman from "mockman-js";
import "./App.css";

function App() {
  return (
    <div>

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
    </div>
  );
}

export default App;
