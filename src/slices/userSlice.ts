import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import User from '../components/interfaces/User'

const initialState: User = {
    id: 0,
    faculty: { id: 0, name: '' },
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    phoneNumber: '',
    profilePicturePath: '',
    token: '',
    isConfirmed: false,
    createdAt: '',
} 
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id
            state.faculty = action.payload.faculty
            state.email = action.payload.email
            state.password = action.payload.password
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.birthDate = action.payload.birthDate
            state.phoneNumber = action.payload.phoneNumber
            state.profilePicturePath = action.payload.profilePicturePath
            state.token = action.payload.token
            state.isConfirmed = action.payload.isConfirmed
            state.createdAt = action.payload.createdAt
        },
        clearUser: (state) => {
            state.id = 0
            state.faculty = { id: 0, name: '' }
            state.email = ''
            state.password = ''
            state.firstName = ''
            state.lastName = ''
            state.birthDate = ''
            state.phoneNumber = ''
            state.profilePicturePath = ''
            state.token = ''
            state.isConfirmed = false
            state.createdAt = ''
        },
    },
})

export const { setUser, clearUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer