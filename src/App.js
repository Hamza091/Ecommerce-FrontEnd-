import React from 'react'; 
import './App.css';
import {Data} from './Data';
import Nav from './Nav';
import Main from './Main';
import Cart from './Cart';
import { Route } from 'react-router-dom';


function App() {
  
  return (
   <Data >
     <Nav />
     <Route exact path="/" component={Main} />
     <Route path="/cart" component={Cart} />
      
  </Data> 
   
    
  );
  }

export default App;
