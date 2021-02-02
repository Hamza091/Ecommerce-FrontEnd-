import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import AdminNav from './AdminNav'
import './Admin.css'
import { Route , Switch } from 'react-router-dom';
// import Products from './Products'
function Admin() {
    const login = useSelector(state=>state.UpdateLoginReducer.login)
    const history = useHistory()
    console.log(login)    
    if(!login)
    {
        history.push("/")
    } 
    return (
        <div className="adminContainer">
                <AdminNav />
            {/* <Switch>
                <Route path="/products" component={Products}></Route>
            </Switch>                 */}
        </div>
    
    )
    
}

export default Admin
