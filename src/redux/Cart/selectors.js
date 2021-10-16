import { createSelector } from '@reduxjs/toolkit';

const cartItemSelector =(state)=> state.cart.cartItems;

// Count number of product in cart

export const cartItemsCountSelector =  createSelector(
  cartItemSelector, 
  cartItems => cartItems.reduce((count, item)=>  count + item.quantity,0)
);

//Calculate total of cart
export const cartTotalSelector =  createSelector(
  cartItemSelector, 
  cartItems => cartItems.reduce((total, item)=>  total + ( item.product.salePrice * item.quantity),0)
);