import { createContext, useReducer, useState } from "react";
const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    modelPopUp:Boolean,
    setModelPopUp:Boolean,
});
function CartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        console.log('i am in Add block')
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const updatedItems = [...state.items];
        const existingItem = state.items[existingCartItemIndex];
        if (existingCartItemIndex > -1) {
            const upadatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            }
            updatedItems[existingCartItemIndex] = upadatedItem;
        }
        else {
            updatedItems.push({
                ...action.item,
                quantity: 1
            });
        }
        return {
            ...state,
            items: updatedItems
        };
    }
    if (action.type === 'REMOVE_ITEM') {
        console.log('in the remove function');
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];
        if (existingCartItem === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        }
        else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            }
            updatedItems[existingCartItemIndex] = updatedItem;
            return {
                ...state,
                items: updatedItems

            }


        }
        return {
            ...state,
            items: updatedItems
        }

    }
    return state;
}




export const CartContexProvider = ({ children }) => {
    const [modelPopUp,setModelPopUp]=useState(false);
    const [cart, dispatchCartAction] = useReducer(CartReducer, {
        items: [],
    });

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    }
    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    }
    const cartContextItems = {
        items: cart.items,
        addItem,
        removeItem,
        modelPopUp,
        setModelPopUp,
    }
    return <CartContext.Provider value={cartContextItems}>{children}</CartContext.Provider>

}
export default CartContext;