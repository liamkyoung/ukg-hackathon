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
        deleteInterests: (state, action) => {
            state.interests = [...state.interests.filter(i => i !== action.payload)]
        },
        togglePets: (state) => {
            state.pets.owns = !state.pets.owns
        },
        addDogs: (state, action) => {
            state.pets.petTypes = {...state.pets.petTypes, "dogs": !state.pets.petTypes.dogs}
        },
        addCats: (state, action) => {
            state.pets.petTypes = {...state.pets.petTypes, "cats": !state.pets.petTypes.cats}
        },
        addBirds: (state, action) => {
            state.pets.petTypes = {...state.pets.petTypes, "birds": !state.pets.petTypes.birds}
        },
        addSnakes: (state, action) => {
            state.pets.petTypes = {...state.pets.petTypes, "snakes": !state.pets.petTypes.snakes}
        },
        addFish: (state, action) => {
            state.pets.petTypes = {...state.pets.petTypes, "fish": !state.pets.petTypes.fish}
        },
        addRabbits: (state, action) => {
            state.pets.petTypes = {...state.pets.petTypes, "rabbits": !state.pets.petTypes.rabbits}
        },
        addHamsters: (state, action) => {
            state.pets.petTypes = {...state.pets.petTypes, "hamsters": !state.pets.petTypes.hamsters}
        },
        addOther: (state, action) => {
            state.pets.petTypes = {...state.pets.petTypes, "other": !state.pets.petTypes.other}
        },
        updateFavorite: (state, action) => {
            state.favorite_interest = action.payload
        }
    }
})

export const { addBasicInfo, addInterests, deleteInterests, addDogs, addCats, addBirds, addSnakes, addFish, addRabbits, addHamsters, addOther, togglePets, updateFavorite } = userSlice.actions

export default userSlice.reducer