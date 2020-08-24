import {createStore,combineReducers} from 'redux'
import {DataReducer} from './DataReducer'
import { UserReducer } from './UserReducer'
import {UserBillReducer} from './UserBillReducer'
import {UpdateLoginReducer} from './UpdateLoginReducer'

const rootReducer = combineReducers(
    {
        DataReducer,
        UserReducer,
        UserBillReducer,
        UpdateLoginReducer
    })
export const Store = createStore(rootReducer)



