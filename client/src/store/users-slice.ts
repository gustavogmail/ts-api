import { User, UsersStoreModel } from '../models/redux-model';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUsersState: UsersStoreModel = {
    users: [],
    current_user: {
        "id": 0,
        "firstName": "",
        "lastName": "",
        "age": 0
    },
}

const usersSlice = createSlice({
    name: "users",
    initialState: initialUsersState,
    reducers: {
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        },
        setCurrentUser(state, action: PayloadAction<User>) {
            state.current_user = action.payload;
        }
    }
})

export default usersSlice;