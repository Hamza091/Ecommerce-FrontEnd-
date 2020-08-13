import React,{useContext} from 'react'
import {storeData} from './Data'
import './cart.css'

function Cart() {
    
    const {userData,increaseQuantity,decreaseQuantity,deleteItem} = useContext(storeData)
    
    return (
        
         <div>
        {userData.length===0?null:<table className="table">
            <tbody className="tablebody">
            <tr ><th className="producttitle">Product Name</th><th className="productprice">Product Price</th><th className="productquantity">Product Quantity</th><th className="productamount">Total Amount</th></tr>
            {userData.map((items)=><tr key={items.id} >
                <td className="titlecolumn">{items.title}</td>
                <td className="pricecolumn">{items.price}</td>
                <td className="quantitycolumn"><button className="increase"onClick={()=>{increaseQuantity(items=items.quantity+=1)}}>+</button>{items.quantity}
                <button className="decrease"onClick={ items.quantity>1?()=>{decreaseQuantity(items=items.quantity-=1)}:null}>-</button></td>
                <td className="totalpricecolumn">${items.quantity*items.price}</td>
                <td className="deletebtncolumn"><button className="delete" onClick={()=>deleteItem(items)}>Delete</button></td>
            </tr>)}
                </tbody>
        </table>
        }</div>
    )
}

export default Cart
