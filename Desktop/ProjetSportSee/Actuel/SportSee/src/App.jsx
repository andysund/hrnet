import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Route d'accueil */}
        <Route path="/" element={<Accueil />} />
        {/* Exemple de route avec paramètre id pour accéder à la page d'accueil d'un utilisateur */}
        <Route path="/user/:id" element={<Accueil />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
