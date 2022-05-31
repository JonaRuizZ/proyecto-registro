import logo from "../../img/kyc.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    const openMenu = () => {
        let nav = document.getElementById('main-menu');
        let toggle = document.getElementById('main-menu-toggle');
      
        if (!nav || !toggle) return;
      
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
          toggle.classList.toggle('active');
        });
    };

    return(
        <header className="main-header">
            <div className="ed-grid s-grid-5 lg-grid-4"> {/* 5 columnas en S y 4 en L */}

            {/* Logo  */}
                <div className="s-cols-4 lg-cols-1 s-cross-center"> {/* cols es la cantidad de columnas que utiliza, 4 de 5 en mobile, para que las lineas hamburguesas se vayan a la derecha y 1 de 4 en tamaño grande, para que el logo quede a la izquierda */}
                    <a href="/">
                        <img className="main-logo" src={logo} alt="logo" />
                    </a>
                </div>

                <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                    <nav className="main-menu" id="main-menu">
                        <ul>
                            <li>
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/departamentos">Departamentos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/galeria">Galería</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contactenos">Contáctenos</NavLink>
                            </li>
                            <li>
                                <NavLink className="button btn" to="/login">Iniciar sesión</NavLink>
                            </li>
                        </ul>
                    </nav>

                {/* Menú hamburguesa */}
                <div className="main-menu-toggle to-l" id="main-menu-toggle" onClick={openMenu}></div>
                </div>
            </div>
        </header>
    )
}

export default Header;