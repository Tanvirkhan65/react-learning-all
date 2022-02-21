import actionTypes from '../types/actionTypes';

const initialState = {
    count: 0
};
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            };
        default:
            return state;
    }
};
export default counterReducer;
