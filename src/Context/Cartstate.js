import React, { useEffect, useReducer } from 'react'
import Cartcontext from './Cartcontext'
import reducer from '../Reducer/CartReducer'

const Cartstate = (props) => {

    const getLocalCartData = () => {
        let newCartData = localStorage.getItem("cart");
        if (newCartData === []) {
            return [];
        }
        else {
            return JSON.parse(newCartData);
        }
    }

    const initialState = {
        cart: getLocalCartData(),
        total_item: 0,
        total_amount: 0,
        shipping_fee: 500
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    }

    const deleteItem = (id) => {
        dispatch({ type: "DELETE_ITEM", payload: id });
    }

    const deleteAllItem = () => {
        dispatch({ type: "DELETE_ALL_ITEM" });
    }

    const setDecrease = (id) => {
        dispatch({ type: "DECREASE_ITEM", payload: id });
    }

    const setIncrease = (id) => {
        dispatch({ type: "INCREASE_ITEM", payload: id });
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart))
        dispatch({ type: "UPDATE_ITEM_NO" });
        dispatch({ type: "GET_TOTAL_PRICE" });
    }, [state.cart])

    return (
        <Cartcontext.Provider value={{ ...state, addToCart, deleteItem, deleteAllItem, setDecrease, setIncrease }}>
            {props.children}
        </Cartcontext.Provider>
    )
}

export default Cartstate