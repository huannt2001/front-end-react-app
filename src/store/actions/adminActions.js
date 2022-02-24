import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers, deleteUserService, editUserService } from "../../services/userService";
import { toast } from 'react-toastify';
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (error) {
            dispatch(fetchGenderFailed())
            console.log("fetchGenderStart error", error)
        }
    }
}

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (error) {
            dispatch(fetchPositionFailed())
            console.log("fetchPositionStart error", error)
        }
    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (error) {
            dispatch(fetchRoleFailed())
            console.log("fetchRoleStart error", error)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionSuccess = (postionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: postionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);

            console.log('>>> check create user redux ', res);
            if (res && res.errCode === 0) {
                toast.success('Create a new user succeed!')
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error('Create the user error!')
                dispatch(saveUserFailed())
            }
        } catch (error) {
            toast.error('Create the user error!')
            dispatch(saveUserFailed())
            console.log("saveUserFailed error", error)
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                toast.error('Fetch the user error!')
                dispatch(fetchAllUsersFailed())
            }
        } catch (error) {
            toast.error('Fetch the user error!')
            dispatch(fetchGenderFailed())
            console.log("fetchAllUsersFailed error", error)
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
})


export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);

            if (res && res.errCode === 0) {
                toast.success('Delete the user succeed!')
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error('Delete the user error!')
                dispatch(deleteUserFailed())
            }
        } catch (error) {
            toast.error('Delete the user failed!')
            dispatch(deleteUserFailed())
            console.log("deleteUserFailed error", error)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);

            if (res && res.errCode === 0) {
                toast.success('Update the user succeed!')
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error('Delete the user error!')
                dispatch(editUserFailed())
            }
        } catch (error) {
            toast.error('Delete the user failed!')
            dispatch(editUserFailed())
            console.log("editUserFailed error", error)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})