import React from 'react'
import './AdminNav.css'
import {Link} from 'react-router-dom'
function AdminNav() {
    return (
        <div className="navContainer">
            {/* products={add,delete,edit} , orders={see user orders , change status of orders} , login/logout */}
            <Link to="/products">products</Link>
        </div>
    )
}

export default AdminNav
