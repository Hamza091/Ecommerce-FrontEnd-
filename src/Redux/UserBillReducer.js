import { USER_BILL } from "./Constants";


const initialState = {
    Amount:0,
    Product:0
}

export const UserBillReducer = (state=initialState , action)=>
{
    switch(action.type)
    {
        case USER_BILL:
          return({...state,Amount:parseInt(action.payload.totalAmount)+state.Amount,Product:state.Product+action.payload.Product})
            
        default:
            return state      
    }
}