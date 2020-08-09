
export const  Reducer=(state,action)=>
{
    switch(action.type)
    {
        case 'ADD_PRODUCT':
            return([...state,action.payload])
    }
}