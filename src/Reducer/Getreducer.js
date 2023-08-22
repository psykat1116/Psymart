const ProductReducer = (state, action) => {
    if (action.type === "SET_LOADING") {
        return {
            ...state,
            isLoading: true,
        };
    }
    else if (action.type === "SET_SINGLE_LOADING") {
        return {
            ...state,
            isSingleLoading: true,
        };
    }
    else if (action.type === "API_SINGLE_ERROR") {
        return {
            ...state,
            isSingleLoading: false,
            isError: true,
        };
    }
    else if (action.type === "API_ERROR") {
        return {
            ...state,
            isLoading: false,
            isError: true,
        };
    }
    else if (action.type === "MY_API_DATA") {
        const featureData = action.payload.filter((curr) => {
            return curr.featured === true;
        })
        return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureData,
        };
    }
    else if (action.type === "MY_SINGLE_DATA") {
        return {
            ...state,
            isSingleLoading: false,
            Sproduct: action.payload,
        };
    }
    return state;
}

export default ProductReducer;