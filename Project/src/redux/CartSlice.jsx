import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems:[],
  },
  reducers: {
    addToCart(state,action){
        const newItem =action.payload
        console.log(newItem)
        const ItemIndex=state.cartItems.findIndex(x => x.product.id == newItem.product.id)
        if(ItemIndex >= 0){
            state.cartItems[ItemIndex].quantity += newItem.quantity
        }
        else{
            state.cartItems.push(newItem)
        }
    },
    setQuantity(state,action){
        const {id , quantity} = action.payload
        const ItemIndex = state.cartItems.findIndex(x => x.id == id)
        if(ItemIndex>=0){
            state.cartItems[ItemIndex].quantity = quantity
        }
    },
    removeToCart(state,action){
        const idNeedToRemove = action.payload
        state.cartItems=state.cartItems.filter(x => x.id != idNeedToRemove)
    },
    removeAllCart(state){
      state.cartItems=[]
    }
  },
});

const { reducer, actions } = cartSlice;
export const { removeAllCart ,addToCart,setQuantity,removeToCart} = actions
export default reducer;
