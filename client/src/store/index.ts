import {configureStore} from '@reduxjs/toolkit';
import usersSlice from './users-slice';

const store=configureStore(
    {
        reducer:{ state: usersSlice.reducer }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;