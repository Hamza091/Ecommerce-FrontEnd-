import React,{useContext} from 'react'
import './nav.css'
import {storeData} from './Data';
import cartLogo from './cartLogo.png'
import {Link} from 'react-router-dom';

function Nav() {
        const {countProduct}= useContext(storeData)
        // console.log(data)
    return (
        
        <div className="nav">
            <ul className="list">
            <li className="logo">EStore</li>
            <li className="home"><Link to="/">Home</Link></li>
    <li className="cart"><Link to="/cart">Cart</Link><img  src={cartLogo} alt="img not found" className="logoCart"></img >
    <div className="count">{countProduct}</div></li>
            </ul>
         
        </div>
    
    )
}

export default Nav
