import { Link } from "react-router-dom";
import "../../src/main.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">Ihre</Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/vestidos">Vestidos</Link></li>
                <li><Link className="menu-link" to="/productos/sudaderas">Sudaderas</Link></li>
                <li><Link className="menu-link" to="/productos/deportivos">Deportivos</Link></li>
                <li><Link className="menu-link" to="/productos/abrigos">Abrigos</Link></li>
                <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
                <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                <li><CartWidget /></li>            
            </ul>
        </nav>
    )
}

export default NavBar