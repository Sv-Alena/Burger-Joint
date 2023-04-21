import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        addItemInCart: (state, action) => {
            //const timeId = new Date().getTime()
            state.itemsInCart.push({
                //id: timeId,
                
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price
            })
        },
        removeItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(
                product => product.id !== action.payload
            )
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.itemsInCart.reduce((total, itemsInCart ) =>{
        return itemsInCart.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.itemsInCart
export const { addItemInCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer