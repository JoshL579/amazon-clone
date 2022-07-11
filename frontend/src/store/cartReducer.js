import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        add: (state, action) => {
            state.items = [...state, action.payload]
        },
        remove: (state, action) => {
            let newItems = []
            state.items.forEach(item => {
                if (item.id !== action.id) {
                    newItems.push(item)
                }
            })
            state.items = newItems
        }
    }
})

export const { add, remove } = cartReducer.actions

export const selectCart = (state) => state.cart.value

export default cartReducer.reducer