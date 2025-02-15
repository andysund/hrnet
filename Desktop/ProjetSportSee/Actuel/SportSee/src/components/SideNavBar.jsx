import Copiright from '../assets/Copiryght, SportSee 2020.png'
import { Link } from 'react-router-dom'
import '../styles/SideNavBar.css'
import yoga from '../assets/yoga.png'
import natation from '../assets/natation.png'
import velo from '../assets/velo.png'
import musculation from '../assets/musculation.png'
function SideNavBar() {
  return (
    <nav className="Sidenavbar">
     
      <ul className="Sidenavbar__links">
        <li>
          <Link to="/yoga" className="icone-link"><img src={yoga} alt="Copiright, SportSee 2020" /></Link>
        </li>
        <li>
          <Link to="/natation" className="icone-link"><img src={natation} alt="Copiright, SportSee 2020" /></Link>
        </li>
        <li>
          <Link to="/velo" className="icone-link"><img src={velo} alt="Copiright, SportSee 2020" /></Link>
        </li>
        <li>
          <Link to="/musculation" className="icone-link"><img src={musculation} alt="Copiright, SportSee 2020" /></Link>
        </li>
      </ul>
      <div className="Sidenavbar__legal">
        <img src={Copiright} alt="Copiright, SportSee 2020" />
      </div>

    </nav>
  )
}

export default SideNavBar
