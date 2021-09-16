import { actionTypes } from "../actions/types"
const initialState = {
    profile: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADMIN_LOGIN: 
            state.profile = action.profile
            return {...state}
        default:
            return {...state}
    }
}
export default reducer