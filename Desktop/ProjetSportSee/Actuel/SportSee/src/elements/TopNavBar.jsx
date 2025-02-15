import '../styles/TopNavBar.css'
import { Link } from 'react-router-dom'
import SportSeeLogo from '../assets/SportSeeLogo.png'

function TopNavBar() {
  return (
    <nav className="Topnavbar">
      <div className="Topnavbar__logo">
        <img src={SportSeeLogo} alt="SportSee Logo" />
      </div>

      <ul className="Topnavbar__links">
        <li>
          <Link to="/" className="nav-link">Accueil</Link>
        </li>
        <li>
          <Link to="/profil" className="nav-link">Profil</Link>
        </li>
        <li>
          <Link to="/reglage" className="nav-link">Réglage</Link>
        </li>
        <li>
          <Link to="/communaute" className="nav-link">Communauté</Link>
        </li>
      </ul>
    </nav>
  )
}

export default TopNavBar
