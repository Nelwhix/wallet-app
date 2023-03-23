import { createSlice, configureStore } from '@reduxjs/toolkit'

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isAnimating: false,
        key: 0
    },
    reducers: {
        start: state => {
            state.isAnimating = true
            state.key = 1
        },
        stop: state => {
            state.isAnimating = false
            state.key = 0
        }
    }
})

export const selectIsAnimating = (state) => state.loader.isAnimating
export const selectKey = (state) => state.loader.key

export const { start, stop } = loaderSlice.actions

const store = configureStore({
    reducer: loaderSlice.reducer
})
