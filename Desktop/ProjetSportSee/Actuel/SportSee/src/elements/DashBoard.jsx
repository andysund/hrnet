import { useParams } from 'react-router-dom';
import KeyData from './KeyData';
import '../styles/Dashboard.css';

function Dashboard() {
  // Récupère le paramètre "id" depuis l'URL
  const { id } = useParams();

  return (
    <>
    <div className='full-info'>
      {/* Passe l'id en tant que prop à KeyData */}
      <KeyData userId={id} />
      {console.log("id:", id)}
    </div>
    </>
  );
}

export default Dashboard;
