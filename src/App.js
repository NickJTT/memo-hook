import React from 'react';
import style from './App.module.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className = { style.app }>
      <Counter/>
    </div>
  );
}

export default App;
