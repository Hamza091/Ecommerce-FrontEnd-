import React,{useContext,useState} from 'react'
import {storeData} from './Data';
import './Main.css'
function Main() {
    const {data,addProduct,isClicked}=useContext(storeData)
    return (
        <div className="main-container">
            {
                data.map((items)=><div className="product" key={items.id}>
                <img src={items.image} className="images"></img>
                <div className="title">{items.title}</div>
                <div className="price">${items.price}</div>
                <button className={items.check?"addToCart":"addedToCart"} onClick={items.check?()=>{addProduct({...[items.id,items.title,items.price,items.image,items.check=false]})}:null}>Add to cart</button>
                {!items.check?<div className="product-added">Added</div>:null}
                </div>)
            }
            
        </div>
    )
}

export default Main
