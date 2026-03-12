import React from 'react';
import { useNavigate } from 'react-router-dom';
import Mprojects from './components/Mprojects';
import './App.css' 

function App() {
  const navigate = useNavigate();
  const goBack = () => navigate('/');

  return (
    <div className="App">
      <Mprojects goToNewPage={goBack} />
    </div>
  );
}

export default App;
