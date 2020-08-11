import React,{useContext,useState,useEffect} from 'react'
import {storeData} from './Data'
function Cart() {
    
    const {userData,increaseQuantity} = useContext(storeData)
    useEffect(() => {
      console.log(userData)
    }, [increaseQuantity])
    // console.log(userData)
    return (
 
        <table>
            <tbody>
            <tr><th>Product Name</th><th>Product Price</th><th>Product Quantity</th><th>Total Amount</th></tr>
            {userData.map((items)=><tr key={items.id}>
                <td>{items.title}</td>
                <td>{items.price}</td>
                <td><button onClick={()=>{increaseQuantity(items=items.quantity+=1)}}>+</button>{items.quantity}<div>-</div></td>
                <td>100</td>
            </tr>)}
                </tbody>
        </table>
    )
}

export default Cart
