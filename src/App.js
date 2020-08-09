import React from 'react';
import './App.css';
import {Data} from './Data';
import Nav from './Nav';
import Main from './Main'
import Check from './Check'
function App() {
  
  return (
   <Data >
     <Nav />
     <Main />
     <Check />
  </Data> 
   
    
  );
  }

export default App;
