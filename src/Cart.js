import React,{useContext,useState,useEffect} from 'react'
import {storeData} from './Data'
function Cart() {
    
    const {userData,increaseQuantity,decreaseQuantity,deleteItem} = useContext(storeData)
    // useEffect(() => {
    //   console.log(userData)
    // }, [decreaseQuantity])
    // console.log(userData)
    return (
 
        <table>
            <tbody>
            <tr><th>Product Name</th><th>Product Price</th><th>Product Quantity</th><th>Total Amount</th></tr>
            {userData.map((items)=><tr key={items.id}>
                <td>{items.title}</td>
                <td>{items.price}</td>
                <td><button onClick={()=>{increaseQuantity(items=items.quantity+=1)}}>+</button>{items.quantity}
                <button onClick={items.quantity>1?()=>{decreaseQuantity(items=items.quantity-=1)}:null}>-</button></td>
                <td>${items.quantity*items.price}</td>
                <button onClick={()=>deleteItem(items)}>Delete</button>
            </tr>)}
                </tbody>
        </table>
    )
}

export default Cart
