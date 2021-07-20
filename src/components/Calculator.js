import React from 'react';

import './Calculator.css';

import CalculatorInputDisplay from './CalculatorInputDisplay';
import CalculatorButtons from './CalculatorButtons';
import { DisplayContextProvider } from '../contexts/DisplayContext';

const Calculator = () => {
  return (
    <DisplayContextProvider>
      <main className="calculator">
        <CalculatorInputDisplay />
        <CalculatorButtons />
      </main>
    </DisplayContextProvider>
  );
};

export default Calculator;