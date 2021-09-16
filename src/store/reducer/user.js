import { actionTypes } from "../actions/types"
const initialState = {
    userList: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_USER_LIST: 
            state.userList = action.userList
            return {...state}
        default:
            return {...state}
    }
}
export default reducer