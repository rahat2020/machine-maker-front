import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  total: 0,
  length: 0,
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const existing = state.products.find((product) => product._id === action.payload._id)

      console.log('existing', existing)

      if (existing) {
        existing.quantity = existing.quantity + 1;
        existing.price = parseInt(existing.price) + parseInt(existing.price)

      } else {
        state.products.push({ ...action.payload, quantity: 1, price: action.payload.price })
      }
      // state.total = (state.total + action.payload.price).toFixed(2);
      // let totalPrice= state.price.parseInt( 10)
      state.total += parseInt(action.payload.price)
      // state.total += action.payload.price
    },
    minusOneFromCart: (state, action) => {
      const existing = state.products.find(p => p._id === action.payload._id)

      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1 ///// to remove one item from the cart
      }
      else {
        state.products = state.products.filter((product) => product._id !== action.payload._id)
      }
      state.total -= parseInt(action.payload.price)
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter((product) => product._id !== action.payload._id) ///// to remove the item from the cart
      state.total -= parseInt(action.payload.price)
      // state.total -= parseInt(action.payload.price) * action.payload.quantity
    }
  },
})

export const { addToCart, removeFromCart, minusOneFromCart } = cartSlice.actions;


export default cartSlice.reducer