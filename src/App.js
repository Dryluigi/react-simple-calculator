import './App.css';

import Calculator from './components/Calculator';

const App = () => {
  return (
    <div className="app">
      <div className="app__container">
        <Calculator />
        <p className="app__copyright">Created by Mario Prasetya Mulya</p>
      </div>
    </div>
  );
};

export default App;