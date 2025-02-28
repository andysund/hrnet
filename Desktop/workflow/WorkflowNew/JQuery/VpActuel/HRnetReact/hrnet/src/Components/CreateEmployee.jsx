import React from "react";
import { useState } from "react";
import "../Styles/CreateEmployee.css"; // Vos styles
import SelectMenu from '../Components/SelectMenu'

const CreateEmployee = () => {
  // Vous pourrez remplacer saveEmployee par une fonction définie dans ce composant ou via un hook
  const saveEmployee = () => {
    // Logique pour sauvegarder l'employé
    console.log("Employee saved!");
  };

  const [selected, setSelected] = useState("sales");

  const options = [
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'human_resources', label: 'Human Resources' },
    { value: 'legal', label: 'Legal' },
    { value: 'engineering', label: 'Engineering' },
  ];

  return (
    <>
    <div className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <a href="employee-list.html">View Current Employees</a>
      <h2>Create Employee</h2>
      <form id="create-employee">
        {/* Ligne 1: First Name et Last Name */}
        <div className="personal-info">
        <div className="row">
          <div className="input-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />
          </div>
          <div className="input-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />
          </div>
        </div>

        {/* Ligne 2: Date of Birth et Start Date */}
        <div className="row">
          <div className="input-group">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input type="text" id="date-of-birth" />
          </div>
          <div className="input-group">
            <label htmlFor="start-date">Start Date</label>
            <input type="text" id="start-date" />
          </div>
        </div>
        </div>

        {/* Fieldset pour l'adresse */}
        <div className="addressAndDepartment">
        <fieldset className="address">
          <legend>Address</legend>
          <div className="input-group">
            <label htmlFor="street">Street</label>
            <input type="text" id="street" />
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div className="input-group">
            <label htmlFor="state">State</label>
            <select name="state" id="state">
              {/* Vous pouvez ajouter ici les options ou les générer dynamiquement */}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="zip-code">Zip Code</label>
            <input type="number" id="zip-code" />
          </div>
        </fieldset>
        <SelectMenu  options={options}
        value={selected}
        onChange={(val) => setSelected(val)}
        width="200px" />
        
        </div>

      

        <button type="button" onClick={saveEmployee}>
          Save
        </button>
      </form>
    </div>
    </>
  );
};

export default CreateEmployee;
