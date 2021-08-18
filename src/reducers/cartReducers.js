import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_RESET_ITEM,
  CART_SAVE_ITEMS,
  SHIPPING_RESET_ITEM
} from "../constants/cartConstants";
import { ORDER_LIST_MY_RESET } from "../constants/orderConstants";

export const cartReducers = (state={cartItems:[], shippingAddress: {} },
    action
    ) =>{
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload;

        const existItem = state.cartItems.find(
          (x) => x.product === item.product
        );

        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
      case CART_REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (x) => x.product !== action.payload
          ),
        };

      case CART_SAVE_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: action.payload,
        };

      case CART_SAVE_PAYMENT_METHOD:
        return {
          ...state,
          paymentMethod: action.payload,
        };
      case CART_SAVE_ITEMS:
        return{
          ...state,
          cartItems: action.payload,
        };
      case CART_RESET_ITEM:
        return { cartItems: [] };

      case SHIPPING_RESET_ITEM:
        return {shippingAddress:{}};
       
      default:
        return state;
        
    }
}
