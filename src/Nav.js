import React,{useContext} from 'react'
import './nav.css'
import {storeData} from './Data';

function Nav() {
        // const {data}= useContext(storeData)
        // console.log(data)
    return (
        
        <div className="nav">
            <ul className="list">
            <li className="logo">EStore</li>
            <li className="home"><a href="">Home</a></li>
            <li className="cart"><a href="">Cart</a></li>
            </ul>
        </div>
    )
}

export default Nav
