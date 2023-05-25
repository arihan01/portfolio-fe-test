import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import ContactLinks from './components//ContactLinks';
import Experience from './components//Experience';
import Skills from './components//Skills';
import Hobbies from './components//Hobbies';
import Languages from './components//Languages';

const App = () => {
  return (
    <div className="App">
      <Introduction />
      <ContactLinks />
      <div className="grid-container">
        <Experience />
        <Skills />
        <Hobbies />
        <Languages />
      </div>
    </div>
  );
};

export default App;
