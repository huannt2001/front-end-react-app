import actionTypes from '../actions/actionTypes';

const initContentOfConfirmModal = {
    isOpen: false,
    messageId: "",
    handleFunc: null,
    dataFunc: null
}

const initialState = {
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('fire fetch gender start', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state };
            copyState.genders = action.data
            console.log('fire fetch gender sucess', copyState)
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            console.log('fire fetch gender error', action)
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;