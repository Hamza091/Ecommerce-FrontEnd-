import {GET_DATA }from '../Constants'
import axios from 'axios'

export const GetData = (res)=>
{
  console.log(res.data)
    return{
        type:GET_DATA,
        payload:res.data
        }

}