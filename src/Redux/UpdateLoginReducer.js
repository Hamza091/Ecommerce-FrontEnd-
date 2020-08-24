import { UPDATE_LOGIN } from "./Constants";


const initialState={login:false}

export const UpdateLoginReducer =(state=initialState,action)=>
{

    switch(action.type)
    {
        case UPDATE_LOGIN:
            return{...state,login:action.payload}
        default:
            return state
    }



}