import React,{useContext} from 'react'
import {storeData} from './Data';
import './Main.css'
function Main() {
    const {data,addProduct}=useContext(storeData)
    
    return (
        <div className="main-container">
            {
                data.map((items)=><div className="product" key={items.id}>
                <img src={items.image} className="images"></img>
                <div className="title">{items.title}</div>
                <div className="price">${items.price}</div>
                <button className="addToCart" onClick={()=>{addProduct({...[items.id,items.title,items.price,items.image]})}}>Add to cart</button>
                
                </div>)
            }
            
        </div>
    )
}

export default Main
