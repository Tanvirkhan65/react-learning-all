import actionTypes from '../types/actionTypes';

const initialState = {
    loading: false,
    user: [],
    error: ''
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case actionTypes.USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: [],
                error: action.payload
            };
        default:
            return state;
    }
};
export default userReducer;
