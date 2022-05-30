import Header from "./sections/Header";
import Home from "./pages/home";
import Galeria from "./pages/galeria";
import Contactenos from "./pages/contactenos";
import Login from "./pages/login";
import Departamentos from "./pages/departamentos";

import { BrowserRouter, Routes ,Route } from 'react-router-dom';

const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/galeria" element={ <Galeria /> } />
          <Route path="/contactenos" element={ <Contactenos /> } />
          <Route path="/departamentos" element={ <Departamentos /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    )
}

export default AppRoutes;