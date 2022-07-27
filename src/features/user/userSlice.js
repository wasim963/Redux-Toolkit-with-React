import { get } from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    users: [],
    error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk( 'user/fetchUsers', () =>  {
    return get( 'https://jsonplaceholder.typicode.com/users' )
    .then( res => res.data  )
} )

const userSlice = createSlice( {
    name: 'user',
    initialState,
    extraReducers: ( builder ) => {
        builder.addCase( fetchUsers.pending, ( state ) => {
            state.isLoading = true;
        } )
        builder.addCase( fetchUsers.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error= ''
        } )
        builder.addCase( fetchUsers.rejected, ( state, action ) => {
            state.isLoading = false;
            state.users= []
            state.error = action.error.message
        } )
    }
} )

export default userSlice.reducer;