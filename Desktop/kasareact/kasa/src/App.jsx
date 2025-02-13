
import './App.css';
import Home from './pages/Home.jsx';
import Housing from  './pages/Housing.jsx';
import LoadFail from './pages/Loadfail.jsx';
import About from './pages/About.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
 
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/housing" element={<Housing/>}/>
          <Route path="/404" element={<LoadFail/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
