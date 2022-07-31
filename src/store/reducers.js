import { combineReducers } from 'redux'
import customer from '../features/Customer/reducer'



const rootReducer = combineReducers({
    customer
})

export default rootReducer