
export const  Reducer=(state,action)=>
{
    switch(action.type)
    {
        case 'ADD_PRODUCT':
            return([...state,action.payload])
        case 'INCREAMENT_QUANTITY':
            return([...state,action.payload])
        case 'DECREASE_QUANTITY':
            return([...state,action.payload])
            
    }
}