import logo from '../assets/LOGO@2x.png';
import { Link } from 'react-router-dom'
import '../styles/Banner.css'
function Banner () {
    return (
        <nav className="banner">
        <Link to="/">
            <img src={logo} alt="Logo Kasa" className="banner__logo" />
        </Link>
        <div className="banner__links">
            <Link to="/" className="banner__link">Accueil</Link>
            <Link to="/about" className="banner__link">A Propos</Link>
        </div>
    </nav>
     )
}
export default Banner