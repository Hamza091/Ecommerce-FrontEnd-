import React,{useContext} from 'react'
import './nav.css'
import {storeData} from './Data';
 import cartLogo from './cartLogo.png'

function Nav() {
        const {countProduct}= useContext(storeData)
        // console.log(data)
    return (
        
        <div className="nav">
            <ul className="list">
            <li className="logo">EStore</li>
            <li className="home"><a href="">Home</a></li>
    <li className="cart"><a href="">Cart<img  src={cartLogo} className="logoCart"></img >
    <div className="count">{countProduct}</div></a></li>
            </ul>
            
        </div>
    )
}

export default Nav
