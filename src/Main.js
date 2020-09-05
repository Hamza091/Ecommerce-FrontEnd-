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
    async function addProd(product)
    {
        // try
        // {
        //     //  const res = await axios({
        //     //      method:'post',
        //     //     url:'http://localhost:8888/api/postproduct',
        //     //     data:{
        //     //        item: "hamza"
        //     //     }

        //     // })
        //     // const obj = {"id":product.id}  

        //     const res = await axios.post('http://localhost:8888/api/postproduct',product)
        //     console.log(product)
        //     console.log(res)

        // }
        // catch(err){console.log(err)}

        dispatch(AddProduct(product))
       dispatch(UserBill({totalAmount:product.price,Product:product.quantity}))
    
    }
    return (
        <div className="main-container">
            {
                Data.map((items)=><div className="product" key={items.id}>
                <img src={items.image} alt="img not found" className="images"></img>
                <div className="title">{items.title}</div>
                <div className="price">${items.price}</div>
                <button className={items.check?"addToCart":"addedToCart"} onClick={items.check?()=>{addProd({id:items.id,title:items.title,price:items.price,image:items.image,check:items.check=false,quantity:1})}:null}>Add to cart</button>
                {!items.check?<div className="product-added">Added</div>:null}
                </div>)
            }
            <Footer />
        </div>
    )
}

export default Main
// {...[items.id,items.title,items.price,items.image,items.check=false,items.quantity=1]}