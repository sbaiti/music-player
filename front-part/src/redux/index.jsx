import { combineReducers } from 'redux'
import user from './user'
import login from './login'

const containersReducer = {
    user,
    login
}

const appReducer = combineReducers({
    ...containersReducer
})

export const createGlobalReducer = (state, action) => {
    if (action.type === 'SIGNOUT_REQUEST') {
        state = {}
        localStorage.setItem('appToken', '')
    }
    return appReducer(state, action)
}

export default createGlobalReducer