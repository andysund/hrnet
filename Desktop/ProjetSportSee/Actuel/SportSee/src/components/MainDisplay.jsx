import '../styles/MainDisplay.css'
import SideNavBar from '../elements/SideNavBar'
import DashBoard from '../elements/DashBoard'
import HelloDisplay from '../elements/HelloDisplay';
function MainDisplay() {
  return (
  <>
    <div className="MainDisplay">
   
    <SideNavBar />

                <div className="AllData">
                    <HelloDisplay/>
                    <DashBoard/>
                </div>
    

    </div>
 
  </>
  );
}
 
export default MainDisplay;