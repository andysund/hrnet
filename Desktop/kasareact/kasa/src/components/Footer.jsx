import LogoFooter from '../assets/LOGO.png'
import Mention from '../assets/© 2020 Kasa. All rights reserved.png'
import { Link } from 'react-router-dom'
import '../styles/Legal.css'

function Footer () {
    return (
        <div className="footer">
             <Link to="/">
            <img src={LogoFooter} alt="Logo Kasa footer" className="Footer__logo" />
        </Link>
        <img src={Mention} alt="Legal mention" className="legalMentions" />

       

        </div>
        
        
     )
}
export default Footer