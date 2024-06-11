import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
    name: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
        }
    }
})

export const { addUser } = UserSlice.actions

export default UserSlice.reducer
