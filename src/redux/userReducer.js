import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    password: ''
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password
        }
    }
})

export const { addUser } = userReducer.actions

export default userReducer
