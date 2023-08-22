import React, { useContext, useEffect, useReducer } from 'react'
import Econtext from './Econtext'
import FileContext from './FilterContext'
import reducer from '../Reducer/FilterReducer'

const FilterState = (props) => {
    const context = useContext(Econtext);
    const { products } = context;

    const initialState = {
        filter_products: [],
        all_products: [],
        grid_view: true,
        sorting_value: "default",
        filters: {
            text: "",
            category: "All",
            company: "All",
            color: "All",
            price: 0,
            maxPrice: 0,
            minPrice: 0,
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" });
    }

    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" });
    }

    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "LIST_SORT", payload: userValue });
    }

    const updateFilter = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        return dispatch({ type: "UPDATE_FILTER", payload: { name, value } })
    }

    const clearFilter = (e) => {
        dispatch({ type: "CLEAR_FILTER" });
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [products, state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products })
    }, [products])

    return (
        <FileContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilter, clearFilter }}>
            {props.children}
        </FileContext.Provider>
    )
}

export default FilterState