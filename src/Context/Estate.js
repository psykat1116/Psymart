import React, { useEffect, useReducer } from 'react'
import Econtext from './Econtext'
import axios from 'axios';
import reducer from '../Reducer/Getreducer'

const Estate = (props) => {
    const initialState = {
        isLoading: true,
        isSingleLoading: false,
        isErorr: false,
        Sproduct: {},
        products: [],
        featureProducts: [],
    }

    const url = "https://api.pujakaitem.com/api/products";
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "MY_API_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "MY_SINGLE_DATA", payload: singleProduct })
        } catch (error) {
            dispatch({ type: "API_SINGLE_ERROR" });
        }
    }

    useEffect(() => {
        getProducts(url);
        // eslint-disable-next-line
    }, []);

    return (
        <Econtext.Provider value={{ ...state, getSingleProduct }}>
            {props.children}
        </Econtext.Provider>
    )
}

export default Estate