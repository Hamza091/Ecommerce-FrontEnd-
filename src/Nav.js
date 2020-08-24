import React from 'react'
import {useSelector} from 'react-redux'
import './nav.css'
import cartLogo from './cartLogo.png'
import {Link} from 'react-router-dom';


function Nav() {
      const product = useSelector(state=>state.UserBillReducer.Product)
        // console.log(data)
    return (
        
        <div className="nav">
            <ul className="list">
            <li className="logo">EStore</li>
            <li className="home"><Link to="/">Home</Link></li>
    <li className="cart"><Link to="/cart">Cart</Link><img  src={cartLogo} alt="img not found" className="logoCart"></img >
    <div className="count">{product}</div></li>
            </ul>
         
        </div>
    
    )
}

export default Nav
