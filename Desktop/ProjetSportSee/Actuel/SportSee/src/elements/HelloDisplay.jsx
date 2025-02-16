
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/HelloDisplay.css";



function HelloDisplay () {
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
       setMainData(data.data.userInfos);
     })
     .catch((error) => console.error("Erreur mainData:", error));
 }, [id]);

 if (!mainData) return <p>Chargement...</p>;

    return ( 
        <>
       <h2>Bonjour {mainData.firstName}</h2>
        </>
    )

}

export default HelloDisplay;