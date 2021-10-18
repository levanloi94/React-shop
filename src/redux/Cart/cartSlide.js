const {createSlice} = require('@reduxjs/toolkit');

// const value = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    // cartItems: [
    //   // id:1,
    //   // product:{},
    //   // color:white
    //   // size:s
    //   // quantity:1
    // ],
    cartItems: localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
  },
  reducers:{
    showMiniCart(state){
      state.showMiniCart = true
    },

    hideMiniCart(state){
      state.showMiniCart = false
    },

    addToCart(state, action){
      // newItem = {id, product,color, size ,quantity}
      const newItem = action.payload;
      const idIndex = state.cartItems.findIndex(x=>x.id === newItem.id);

      const colorIndex = state.cartItems.findIndex(x=>x.color === newItem.color);

      const sizeIndex = state.cartItems.findIndex(x=>x.size === newItem.size);

      
      if(idIndex>=0 && colorIndex >=0 && sizeIndex >=0){
        //update quantity
        state.cartItems[idIndex].quantity += newItem.quantity;
      }else{
        // add to cart
        state.cartItems.push(newItem);
      }
      console.log(state.cartItems)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    updateQuanTity(state, action){
      const {id, quantity } =action.payload;
      //Check if product is available in cart
      const index = state.cartItems.findIndex(x => x.id === id)
      if(index>= 0){
        state.cartItems[index].quantity = quantity;
      }
      console.log(state.cartItems)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    removeFromCart(state, action){
      const idNeedToRmove = action.payload;
      state.cartItems = state.cartItems.filter(x => x.id !== idNeedToRmove)
      console.log(state.cartItems)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }

  }
});

const {actions, reducer} = cartSlice;
export const {showMiniCart, hideMiniCart, addToCart, updateQuanTity, removeFromCart} = actions
export default reducer;
