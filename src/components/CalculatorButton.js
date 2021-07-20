import React, { useContext } from 'react'

import './CalculatorButtons.css';

import { DisplayContext } from '../contexts/DisplayContext';

const CalculatorButton = (props) => {
  const { dispatch } = useContext(DisplayContext);
  const { displayText, expand, blockInput, color } = props;

  const inputText = !blockInput
    ? props.displayText
    : '';

  let componentClasses ='calculator-button ';
  if(expand) {
    componentClasses += 'span-2 ';
  }
  if(color === 'accent') {
    componentClasses += 'calculator-button--accent ';
  }

  const buttonClickHandler = (inputText) => {
    dispatch({ type: 'ADD_OPERAND', newValue: inputText });
  };

  const onClickHandler = () => {
    if(props.onClick) {
      props.onClick(inputText);
    } else {
      buttonClickHandler(inputText);
    }
  };

  return (
    <span 
      className={ componentClasses } 
      role="button"
      onClick={ onClickHandler }
    >
      { displayText }
    </span>
  );
};

export default CalculatorButton;