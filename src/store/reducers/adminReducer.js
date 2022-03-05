import actionTypes from '../actions/actionTypes';

const initContentOfConfirmModal = {
    isOpen: false,
    messageId: "",
    handleFunc: null,
    dataFunc: null
}

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
    allDoctors: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START: {
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_GENDER_SUCCESS: {
            let copyState = { ...state };
            copyState.genders = action.data;
            copyState.isLoadingGender = false;
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_GENDER_FAILED: {
            let copyState = { ...state };
            copyState.genders = [];
            copyState.isLoadingGender = false;
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_POSITION_SUCCESS: {
            let copyState = { ...state };
            copyState.positions = action.data;
            copyState.isLoadingGender = false;
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_POSITION_FAILED: {
            let copyState = { ...state };
            copyState.positions = [];
            copyState.isLoadingGender = false;
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_ROLE_SUCCESS: {
            let copyState = { ...state };
            copyState.roles = action.data;
            copyState.isLoadingGender = false;
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_ROLE_FAILED: {
            let copyState = { ...state };
            copyState.roles = [];
            copyState.isLoadingGender = false;
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_ALL_USERS_SUCCESS: {
            let copyState = { ...state };
            copyState.users = action.users;
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_ALL_USERS_FAILED: {
            let copyState = { ...state };
            copyState.users = [];
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS: {
            let copyState = { ...state };
            copyState.topDoctors = action.dataDoctors;
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_TOP_DOCTORS_FAILED: {
            let copyState = { ...state };
            copyState.users = [];
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_ALL_DOCTORS_SUCCESS: {
            let copyState = { ...state };
            copyState.allDoctors = action.dataDr;
            return {
                ...copyState,
            }
        }
        case actionTypes.FETCH_ALL_DOCTORS_FAILED: {
            let copyState = { ...state };
            copyState.users = [];
            return {
                ...copyState,
            }
        }
        default:
            return state;
    }
}

export default adminReducer;