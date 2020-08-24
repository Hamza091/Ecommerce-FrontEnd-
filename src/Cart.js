import React from 'react'
import './cart.css'
import {useSelector , useDispatch} from 'react-redux'
import Totalbill from './Totalbill'
import { IncreaseQuantity } from './Redux/Actions/IncreaseQuantity'
import { DecreaseQuantity } from './Redux/Actions/DecreaseQuantity'
import { DeleteProduct } from './Redux/Actions/DeleteProduct'
import {UserBill} from './Redux/Actions/UserBill'
function Cart() {
   
    const userData = useSelector(state=>state.UserReducer)    
    console.log(userData)
    const dispatch = useDispatch()
//    useEffect(() => {
//        dispatch(UserBillReducer({Amount:items.price}))
//    }, IncreaseQuantity())
    
    const increase = (items)=>
    {
        dispatch(IncreaseQuantity(items.id))
        dispatch(UserBill({totalAmount:items.price,Product:0}))
    }
    const decrease = (items)=>
    {
        dispatch(DecreaseQuantity(items.id))
        dispatch(UserBill({totalAmount:-items.price,Product:0}))
    }
    const deletep = (items)=>
    {
        dispatch(DeleteProduct(items.id))
        dispatch(UserBill({totalAmount:-(items.price*items.quantity),Product:-1}))
      
    }
    
    return (
        
         <div>
        {userData.length===0?null:<table className="table">
            <tbody className="tablebody">
            <tr ><th className="producttitle">Product Name</th><th className="productprice">Product Price</th><th className="productquantity">Product Quantity</th><th className="productamount">Total Amount</th></tr>
            {userData.map((items)=><tr key={items.id} >
                <td className="titlecolumn">{items.title}</td>
                <td className="pricecolumn">{items.price}</td>
                <td className="quantitycolumn"><button className="increase" onClick={()=>increase(items)}>+</button>{items.quantity}
                <button className="decrease"onClick={ items.quantity>1?()=>decrease(items):null}>-</button></td>
                <td className="totalpricecolumn" >${(items.quantity*items.price).toFixed(2)}</td>
                <td className="deletebtncolumn"><button className="delete" onClick={()=>deletep(items)}>Delete</button></td>
                
            </tr>)
        
            }
                </tbody>
        </table>
        }
        {userData.length===0?null:<Totalbill />}
        </div>

    )
        
}

export default Cart
