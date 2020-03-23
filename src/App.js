import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DogPage from './DogPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            component={HomePage}
          />

          <Route
            exact
            path='/dogs/'
            component={DogPage}
          />

        </Switch>
      </div>
  );
}

export default App;
