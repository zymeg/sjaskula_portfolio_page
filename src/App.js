import React from 'react';
import './App.scss';
// import NavBar from './components/NavBar/NavBar'
import MainPage from './components/MainPage/MainPage'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import CV from './components/CV/CV'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <MainPage />
      <Skills />
      <Portfolio />
      <CV />
      <About />
    </div>
  );
}

export default App;
