// KeyData.jsx
import Calories from '../assets/calories-icon.png'
import Proteins from '../assets/protein-icon.png'
import Glucides from '../assets/carbs-icon.png'
import Lipides from '../assets/fat-icon.png'


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/KeyData.css";

function KeyData() {
  // Récupérer l'id depuis l'URL
  const { id } = useParams();
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    console.log("id:", id);
    fetch(`http://localhost:3000/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data from API:", data);
        // Puisque la structure est { data: { ... } }, on accède à keyData via data.data.keyData
        setMainData(data.data.keyData);
      })
      .catch((error) => console.error("Erreur mainData:", error));
  }, [id]);

  if (!mainData) return <p>Chargement...</p>;

  return (
    <>
    <div className="keydata-container">



     
     <div className="keydata">
        
    <div className="keydata__item">
     <div className="keydata__icone_calories">
      <img src={Calories} alt="Calories" className="keydata__icone" />
     </div>
      <div className="keydata__info">
        <div className="keydata__info__value">{mainData.calorieCount} kCal</div>
        <div className="keydata__info__label">Calories</div>
      </div>
      </div>
      

      <div className='keydata__item'>
      <div className="keydata__icone_proteins">
        <img src={Proteins} alt="Proteins" className="keydata__icone" />
     
     </div>

     <div className="keydata__info">
        <div className="keydata__info__value">{mainData.proteinCount} g</div>
        <div className="keydata__info__label">Protéines</div>
      </div>
      </div>

      <div className="keydata__item">

     <div className="keydata__icone_glucides">
        <img src={Glucides} alt="Glucides" className="keydata__icone" />
     
     </div>
     <div className="keydata__info">
        <div className="keydata__info__value">{mainData.carbohydrateCount} g</div>
        <div className="keydata__info__label">Glucides</div>
      </div>
    </div>

    <div className="keydata__item">
     <div className="keydata__icone_lipides">

        <img src={Lipides} alt="Lipides" className="keydata__icone" />
     
     </div>

     <div className="keydata__info">
        <div className="keydata__info__value">{mainData.lipidCount} g</div>
        <div className="keydata__info__label">Lipdes</div>
      </div>
    </div>
    </div>
    </div>
    

  


 
  
    </>
  );
}

export default KeyData;
