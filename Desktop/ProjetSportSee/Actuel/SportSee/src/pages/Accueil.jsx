// Accueil.jsx
import { useParams } from "react-router-dom";
import TopNavBar from "../elements/TopNavBar";
import MainDisplay from "../components/MainDisplay";

function Accueil() {
  const { id } = useParams(); // Récupère l'id depuis l'URL
  return (
    <>
      <TopNavBar />
      {/* Vous pouvez transmettre l'id à MainDisplay si besoin */}
      <MainDisplay userId={id} />
    </>
  );
}

export default Accueil;
