const evaluate = (state) => {
  return eval(state.before + state.operator + state.value); 
};

const addOperand = (state, newValue) => {
  if (state.value === '0') {
    return {
      ...state,
      value: `${newValue}`,
      resetIsTouched: false,
    };    
  } else if (state.value === '0' && newValue === '0') {
    return {
      ...state
    };
  } else {
    return {
      ...state,
      value: `${state.value}${newValue}`,
    };
  }
};

const addOperator = (state, operator) => {
  if (state.operator === null) {
    return {
      ...state,
      value: '0',
      before: state.value,
      operator: operator,
    };
  } else if (state.operator !== null && state.value === '0') {
    return {
      ...state,
      operator: operator,
    };
  } else {
    return {
      ...state,
      value: '0',
      before: evaluate(state) + '',
      operator: operator,
    }
  }
};

const addDecimal = (state) => {
  if (!state.value.includes('.')) {
    return {
      ...state,
      value: state.value + '.',
    };
  } else {
    return {
      ...state,
    };
  }
};

const toggleNegative = (state) => {
  if (state.value === '0') {
    return {
      ...state,
    };
  } else if (state.value[0] !== '-') {
    return {
      ...state,
      value: '-' + state.value,
    };
  } else {
    return {
      ...state,
      value: state.value.substring(1),
    };
  }
};

const execute = (state) => {
  if (state.operator !== null) {
    return {
      value: evaluate(state) + '',
      before: null,
      operator: null,
    };
  } else {
    return {
      ...state,
    };
  }
};

const reset = (state) => {
  if (state.resetIsTouched) {
    return {
      value: '0',
      before: null,
      operator: null,
      resetIsTouched: false,
    };
  } else {
    return {
      ...state,
      value: '0',
      resetIsTouched: true,
    };
  }
};

const DisplayReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_OPERAND':
      return addOperand(state, action.newValue);
    case 'ADD_OPERATOR':
      return addOperator(state, action.operator);
    case 'ADD_DECIMAL':
      return addDecimal(state);
    case 'TOGGLE_NEGATIVE':
      return toggleNegative(state);
    case 'EXECUTE':
      return execute(state);
    default:
      return reset(state);
  }
};

export default DisplayReducer;