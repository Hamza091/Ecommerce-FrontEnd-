import React,{useEffect} from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './Admin.css'
import {GetData} from './Redux/Actions/GetData'
import './Main.css'
function Admin() {
    const admin = useSelector(state=>state.UpdateLoginReducer.admin)
    const history = useHistory()
    console.log(admin)    
    if(!admin)
    {
        history.push("/")
    }

    const dispatch = useDispatch()
    useEffect(() => {
       async function getdata(){
        try
        {
            const res = await axios.get('http://192.168.0.105:8888/api/getdata')
            console.log(res)
            dispatch(GetData(res))
        }
        catch(err){console.log(err)}
       }
       getdata()
    } , [])

    let Data = useSelector(state=>state.DataReducer)
    console.log(Data)
    return (
        <div className="main-container">
            {
                Data.map((items)=><div className="product" key={items.id}>
                <img src={items.image} alt="img not found" className="images"></img>
                <div className="title">{items.title}</div>
                <div className="price">${items.price}</div>
                </div>)
            }
        </div>
    )
    
}

export default Admin
