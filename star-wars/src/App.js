import './App.css';
import React from 'react'
import Particles from 'react-particles-js';
import { particlesOptions } from './util/ParticalUtilites';
import Navigation from './containers/Navigation/Navigation'
import MainRouter from './routes/MainRouter';


function App() {
  return (
    <div className="App">
      <Navigation />
      <MainRouter />
      <Particles className='particles'
        params={{ particlesOptions }}
      />
    </div>
  );
}
export default App;