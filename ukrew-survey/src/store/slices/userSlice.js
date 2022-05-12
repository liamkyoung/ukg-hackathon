import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'user',
    basicInformation: {
        name: '',
        role: '',
        team: '',
        platform: '',
        address: '',
    },
    college: {
        attending: true,
        name: ''
    },
    pets: {
        owns: false,
        petTypes: {
            "dogs": 0,
            "cats": 0,
            "birds": 0,
            "snakes": 0,
            "fish": 0,
            "rabbits": 0,
            "hamsters": 0,
            "other": 0
        }
    },
    interests: [],
    favorite_interest: "",
    custom_message: "",
    emoji: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addBasicInfo: (state, action) => {
            state.basicInformation = action.payload
        },
        addInterests: (state, action) => {
            state.interests = [...state.interests, action.payload]
        },

    }
})

export const { addBasicInfo } = userSlice.actions

export default userSlice.reducer