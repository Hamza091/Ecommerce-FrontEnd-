import React from 'react'; 
import Nav from './Nav';
import Main from './Main';
import Cart from './Cart';
import Login from './Login';
import Orders from './Orders';
import { Route , Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import {Store} from './Redux/Store'
import Register from './Register'


function App() {

  return (
        <Provider store={Store}> 
    {/* <Nav /> */}
     <Route exact path={["/","/cart","/orders"]} component={Nav}/>
         <Switch>
     <Route exact path="/" component={Main} />
     <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      
      <Route path="/orders" component={Orders}   />
      
      </Switch>
  </Provider>
   
  );
  }

export default App;
