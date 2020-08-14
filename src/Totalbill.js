import React,{useContext} from 'react'
import {storeData} from './Data'
import './totalbill.css'

function Totalbill() {
    const {Amount,countProduct,checkout}=useContext(storeData)
    console.log(Amount)
    return (
        <div className="bill">
        <h3 className="Head">Bill</h3>
        <div className="Amount">Amount:<span>$</span>{Amount.toFixed(2)}</div>
        <div className="Tax">Tax:<span>$</span>{(countProduct*15.30).toFixed(2)} </div>
        <div className="Total">Total Amount:<span>$</span>{(Amount+(countProduct*15.30)).toFixed(2)}</div>
        <button onClick={()=>checkout()} className="checkout">Checkout</button>
        </div>
    )
}

export default Totalbill
