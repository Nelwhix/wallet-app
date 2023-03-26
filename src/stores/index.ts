import { createSlice, configureStore } from '@reduxjs/toolkit'

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isAnimating: false,
        key: 0
    },
    reducers: {
        start(state) {
            state.isAnimating = true
            state.key = 1
        },
        stop(state) {
            state.isAnimating = false
            state.key = 0
        }
    }
})

export const { start, stop } = loaderSlice.actions

export const store = configureStore({
    reducer: { 
        loader: loaderSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

