import React, { useContext } from 'react'

import './CalculatorButtons.css';

import CalculatorButton from './CalculatorButton';
import { DisplayContext } from '../contexts/DisplayContext';

const CalculatorButtons = () => {
  const { dispatch } = useContext(DisplayContext);

  const resetDisplayHandler = () => {
    dispatch({ type: 'RESET' });
  };

  const addOperator = (operator) => {
    dispatch({ type: 'ADD_OPERATOR', operator });
  };

  const addDecimal = () => {
    dispatch({ type: 'ADD_DECIMAL' });
  };

  const toggleNegative = () => {
    dispatch({ type: 'TOGGLE_NEGATIVE' });
  };

  const execute = () => {
    dispatch({ type: 'EXECUTE' });
  };


  return (
    <div className="calculator-buttons">
      <CalculatorButton 
        displayText="AC" 
        onClick={ resetDisplayHandler }
        blockInput
      />
      <CalculatorButton 
        displayText="+/-"
        onClick={ toggleNegative }
        blockInput
      />
      <CalculatorButton onClick={ addOperator } displayText="%"/>
      <CalculatorButton 
        onClick={ addOperator } 
        displayText="/"
        color="accent"
      />
      <CalculatorButton displayText="7"/>
      <CalculatorButton displayText="8"/>
      <CalculatorButton displayText="9"/>
      <CalculatorButton 
        onClick={ addOperator } 
        displayText="*"
        color="accent"  
      />
      <CalculatorButton displayText="4"/>
      <CalculatorButton displayText="5"/>
      <CalculatorButton displayText="6"/>
      <CalculatorButton 
        onClick={ addOperator } 
        displayText="-"
        color="accent"  
      />
      <CalculatorButton displayText="1"/>
      <CalculatorButton displayText="2"/>
      <CalculatorButton displayText="3"/>
      <CalculatorButton 
        onClick={ addOperator } 
        displayText="+"
        color="accent"  
      />
      <CalculatorButton displayText="0" expand/>
      <CalculatorButton onClick={ addDecimal } displayText="."/>
      <CalculatorButton 
        onClick={ execute } 
        displayText="="
        color="accent"  
      />
    </div>
  );
};

export default CalculatorButtons;
