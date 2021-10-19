import cartReducer from './Cart/cartSlide'
import searchReducer from './Cart/searchSlice'

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  cart: cartReducer,
  search:searchReducer
}

const store = configureStore({
  reducer: rootReducer,
})

export default store;