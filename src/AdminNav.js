import React from 'react'
import './AdminNav.css'
import {Link} from 'react-router-dom'
function AdminNav() {
    return (
        <div className="navContainer">
            {/* products={add,delete,edit} , orders={see user orders , change status of orders} , login/logout */}
            <div className="navLogo"><p>Estore</p></div>
            <ul className="navBox">
                <li className="navLinks"><Link to="/products">Products</Link></li>
                <li className="navLinks"><Link to="/userorders">Orders</Link></li>
                <li className="navLinks"><Link to="/admin">Home</Link></li>
                {/* <li><Link to="/products">Login</Link></li> */}
            </ul>
        </div>
    )
}

export default AdminNav
