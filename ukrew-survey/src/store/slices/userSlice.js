import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
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
            "dogs": false,
            "cats": false,
            "birds": false,
            "snakes": false,
            "fish": false,
            "rabbits": false,
            "hamsters": false,
            "other": false
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

export const { addBasicInfo, addInterests } = userSlice.actions

export default userSlice.reducer