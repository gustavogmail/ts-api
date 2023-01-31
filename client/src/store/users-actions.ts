import usersSlice from './users-slice';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { User } from "../models/redux-model";
import UsersService from "../service/usersService";

export const usersActions = usersSlice.actions;

export const fetchUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        if (getState().state.users.length === 0) {
            const response: User[] = await UsersService.getAllUsers();
            dispatch(usersActions.setUsers(response));
        }
    }
}

export const fetchCurrentUser = (user_id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const response: User = await UsersService.getParticularUser(user_id);
        dispatch(usersActions.setCurrentUser(response));
    }
}