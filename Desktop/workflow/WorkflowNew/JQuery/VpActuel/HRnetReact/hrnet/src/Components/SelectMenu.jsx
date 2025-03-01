import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDepartment } from '../features/departementSlice';
import '../Styles/SelectMenu.css';

const SelectMenu = ({ options, disabled = false, width }) => {
  const dispatch = useDispatch();
  // Récupère la valeur sélectionnée depuis Redux
  const value = useSelector((state) => state.department.value);

  // États locaux pour le menu déroulant
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef(null);

  // Trouver l'index de l'option sélectionnée dans la liste
  const selectedIndex = options.findIndex(option => option.value === value);

  // Ouvre ou ferme le menu
  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen(prev => !prev);
    if (!isOpen) {
      // Au moment de l'ouverture, placer le focus sur l'option sélectionnée ou la première
      setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    }
  };

  // Sélectionne une option et met à jour l'état global via Redux
  const selectOption = (index) => {
    if (options[index] && !options[index].disabled) {
      dispatch(setDepartment(options[index].value));
      setIsOpen(false);
      setFocusedIndex(index);
    }
  };

  // Gestion de la navigation clavier
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0);
      }
      return;
    }
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        let nextIndex = focusedIndex;
        do {
          nextIndex = (nextIndex + 1) % options.length;
        } while (options[nextIndex].disabled && nextIndex !== focusedIndex);
        setFocusedIndex(nextIndex);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        let prevIndex = focusedIndex;
        do {
          prevIndex = (prevIndex - 1 + options.length) % options.length;
        } while (options[prevIndex].disabled && prevIndex !== focusedIndex);
        setFocusedIndex(prevIndex);
        break;
      }
      case 'Enter': {
        e.preventDefault();
        selectOption(focusedIndex);
        break;
      }
      case 'Escape': {
        e.preventDefault();
        setIsOpen(false);
        break;
      }
      default:
        break;
    }
  };

  // Ferme le menu en cas de clic en dehors du composant
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="selectmenu-container"
      style={{
        width: width || 'auto',
        position: 'relative',
        display: 'inline-block'
      }}
    >
      <label htmlFor="department">Department</label>
      <button
        id='department'
        type="button"
        className="selectmenu-button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '8px 12px',
          cursor: disabled ? 'not-allowed' : 'pointer'
        }}
      >
        {selectedIndex >= 0 ? options[selectedIndex].label : "Sélectionner"}
        <span
          className="selectmenu-icon"
          aria-hidden="true"
          style={{ float: 'right' }}
        >
          ▾
        </span>
      </button>
      {isOpen && (
        <ul
          className="selectmenu-menu"
          role="listbox"
          aria-activedescendant={`option-${focusedIndex}`}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'white',
            border: '1px solid #ccc',
            margin: 0,
            padding: 0,
            listStyle: 'none',
            maxHeight: '200px',
            overflowY: 'auto'
          }}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`option-${index}`}
              role="option"
              aria-selected={selectedIndex === index}
              aria-disabled={option.disabled ? true : undefined}
              className={`selectmenu-option ${focusedIndex === index ? 'focused' : ''} ${option.disabled ? 'disabled' : ''}`}
              onClick={() => selectOption(index)}
              onMouseEnter={() => !option.disabled && setFocusedIndex(index)}
              style={{
                padding: '8px 12px',
                cursor: option.disabled ? 'not-allowed' : 'pointer',
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectMenu;
