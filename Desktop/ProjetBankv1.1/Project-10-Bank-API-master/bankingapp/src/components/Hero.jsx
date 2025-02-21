// src/components/Hero.jsx
import '../styles/hero.css'; // Créez ce fichier et adaptez vos st
import BankTree from '../assets/bank-tree.jpeg'; // Assurez-vous que le chemin est correct
const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className='hero-image'>
        <img src={BankTree} alt='bank tree' />
      </div>

      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
    </>
  );
};

export default Hero;
