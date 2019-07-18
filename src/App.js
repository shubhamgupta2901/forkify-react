import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Results from './components/Results/Results'
import Recipe from './components/Recipe/Recipe';

function App() {
  return (
    <div className="container">
      <Header/>
      <Results/>
      <Recipe/>
    </div>
  );
}

export default App;
