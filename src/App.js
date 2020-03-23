import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DogPage from './DogPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <DogPage />
    </div>
  );
}

export default App;
