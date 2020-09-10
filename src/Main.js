import React,{useEffect}  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './Main.css'
import Footer from './Footer'
import {AddProduct} from './Redux/Actions/AddProduct'
import {UserBill} from './Redux/Actions/UserBill'
import { GetData } from './Redux/Actions/GetData'
import axios from 'axios'
function Main() {
    const dispatch = useDispatch()
    useEffect(() => {
       async function getdata(){
        try
        {
            const res = await axios.get('http://localhost:8888/api/getdata')
            console.log(res)
            dispatch(GetData(res))
        }
        catch(err){console.log(err)}
       }
       getdata()
    } , [])

    let Data = useSelector(state=>state.DataReducer)
    const userData = useSelector(state=>state.UserReducer)
    const userBill = useSelector(state=>state.UserBillReducer)
    console.log(userBill)
    console.log(Data)
    console.log(userData)
    const check = (product) =>
    {
        const temp = userData.filter((item)=>item.id===product.id)
        if(temp.length<1)
        {
        return true    
        }
        else
        {
            return false
        }
    }
    async function addProd(product)
    {
        
        const temp = userData.filter((item)=>item.id===product.id)
        if(temp.length<1){
            
            dispatch(AddProduct(product))
            dispatch(UserBill({totalAmount:product.price,Product:product.quantity}))
        }
    }
    return (
        <div className="main-container">
            {
                Data.map((items)=><div className="product" key={items.id}>
                <img src={items.image} alt="img not found" className="images"></img>
                <div className="title">{items.title}</div>
                <div className="price">${items.price}</div>
                <button className={check(items)?"addToCart":"addedToCart"} onClick={items.check?()=>{addProd({id:items.id,title:items.title,price:items.price,check:items.check=false,image:items.image,quantity:1})}:null}>Add to cart</button>
                {!check(items)?<div className="product-added">Added</div>:null}
                </div>)
            }
            <Footer />
        </div>
    )
}

export default Main
// {...[items.id,items.title,items.price,items.image,items.check=false,items.quantity=1]}