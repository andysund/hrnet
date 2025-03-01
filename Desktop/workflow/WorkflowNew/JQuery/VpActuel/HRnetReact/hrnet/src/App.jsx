import './App.css'
import CreateEmployee from '../src/Components/CreateEmployee'
import EmployeeTable from  '../src/Components/EmployeeTable' // Assurez-vous du bon chemin

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/employee" element={<EmployeeTable />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
