import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import User from '../Interfaces/User';

const initialState: User = {
    id: 0,
    username: '',
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
    yearOfStudy: '',
    role: { id: 0, name: 'Simple User' }, // Default role
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.faculty = action.payload.faculty;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.birthDate = action.payload.birthDate;
            state.phoneNumber = action.payload.phoneNumber;
            state.profilePicturePath = action.payload.profilePicturePath;
            state.token = action.payload.token;
            state.isConfirmed = action.payload.isConfirmed;
            state.createdAt = action.payload.createdAt;
            state.yearOfStudy = action.payload.yearOfStudy;
            state.role = action.payload.role;
        },
        updateUser: (state, action: PayloadAction<Partial<User>>) => {
            const { payload } = action;
            if (payload.username !== undefined) state.username = payload.username;
            if (payload.faculty !== undefined) state.faculty = payload.faculty;
            if (payload.email !== undefined) state.email = payload.email;
            if (payload.password !== undefined) state.password = payload.password;
            if (payload.firstName !== undefined) state.firstName = payload.firstName;
            if (payload.lastName !== undefined) state.lastName = payload.lastName;
            if (payload.birthDate !== undefined) state.birthDate = payload.birthDate;
            if (payload.phoneNumber !== undefined) state.phoneNumber = payload.phoneNumber;
            if (payload.profilePicturePath !== undefined) state.profilePicturePath = payload.profilePicturePath;
            if (payload.token !== undefined) state.token = payload.token;
            if (payload.isConfirmed !== undefined) state.isConfirmed = payload.isConfirmed;
            if (payload.createdAt !== undefined) state.createdAt = payload.createdAt;
            if (payload.yearOfStudy !== undefined) state.yearOfStudy = payload.yearOfStudy;
            if (payload.role !== undefined) state.role = payload.role;
        },
        clearUser: (state) => {
            state.id = 0;
            state.username = '';
            state.faculty = { id: 0, name: '' };
            state.email = '';
            state.password = '';
            state.firstName = '';
            state.lastName = '';
            state.birthDate = '';
            state.phoneNumber = '';
            state.profilePicturePath = '';
            state.token = '';
            state.isConfirmed = false;
            state.createdAt = '';
            state.yearOfStudy = '';
            state.role = { id: 0, name: 'Simple User' }; // Reset to default role
        },
    },
});

export const { setUser, updateUser, clearUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
