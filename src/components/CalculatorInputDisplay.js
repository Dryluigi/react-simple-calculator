import React, { useContext } from 'react';

import './CalculatorInputDisplay.css';

import { DisplayContext } from '../contexts/DisplayContext';

const CalculatorInputDisplay = () => {
  const { value, before, operator } = useContext(DisplayContext);

  return (
    <div className="calculator-input-display">
      <div className="calculator-input-display__sub-display">
        <span>{ before }</span>
        <span>{ operator }</span>
      </div>
      <p 
      className="calculator-input-display"
    >
      { value }
    </p>
    </div>
    
    // <input 
    //   className="calculator-input-display" 
    //   type="text" 
    //   value={ value }
    //   disabled 
    // />
  );
};

export default CalculatorInputDisplay;