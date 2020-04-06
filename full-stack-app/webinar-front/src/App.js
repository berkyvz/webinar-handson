import React from 'react';
import WorldData from './components/WorldData';
import NavBar from './components/NavBar';
import Countries from './components/Countries';

function App() {
  return (
    <div>
      <NavBar/>
      <WorldData/>
      <Countries/>
    </div>
  );
}

export default App;
