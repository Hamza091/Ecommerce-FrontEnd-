import React from 'react'
import axios from './axios'

function UserOrders() {
    
    return (
        <div className="grid">
              { data.map((item)=><div className="orderDetails">
                  <span className="label">Order Id:</span> <span className="productInfo">{item._id}</span><br />
                  <span className="label">Number of Products:</span> {item.noOfProducts}<br />
                  <span className="label"> Total Amount:</span> {item.totalAmount}<br />
                  <span className="label">Status:</span> <span className="status">Pending</span><br />
                  <span className="productHead">Product Details</span>
                     {item.userProducts.map((product)=><div >
                        <span className="label">Title:</span> {product.title}<br />
                        <span className="label">Quantity:</span> {product.quantity}<br />
                        <span className="label">Price:</span> {product.price}<br />
                        </div>)}         
                  </div>)} 
        </div>
    )
}

export default UserOrders
