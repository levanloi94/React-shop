const {createSlice} = require('@reduxjs/toolkit');

// const value = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    showModal: false,
    searchFilter: null,
  },
  reducers:{
    showModal(state){
      state.showModal = true
    },

    hideModal(state){
      state.showModal = false
    },

    addFilter(state, action){
      state.searchFilter = action.payload; 
    },

    removeFilter(state){
      state.searchFilter = null
    }
  }
});

const {actions, reducer} = searchSlice;
export const {showModal, hideModal, addFilter, removeFilter} = actions
export default reducer;
