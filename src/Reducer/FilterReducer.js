const FilterReducer = (state, action) => {
    if (action.type === "LOAD_FILTER_PRODUCT") {
        let priceArr = action.payload.map((e) => e.price);
        let maxPrice = Math.max(...priceArr);
        return {
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
            filters: { ...state.filters, maxPrice, price: maxPrice }
        }
    }
    else if (action.type === "SET_GRIDVIEW") {
        return {
            ...state,
            grid_view: true,
        }
    }
    else if (action.type === "SET_LISTVIEW") {
        return {
            ...state,
            grid_view: false,
        }
    }
    else if (action.type === "LIST_SORT") {
        return {
            ...state,
            sorting_value: action.payload
        }
    }
    else if (action.type === "SORTING_PRODUCTS") {
        let newSortData;
        const { filter_products, sorting_value } = state;
        let tempSortProduct = [...filter_products];

        const compare = (a, b) => {
            if (sorting_value === "a-z") {
                return a.name.localeCompare(b.name);
            }
            if (sorting_value === "z-a") {
                return b.name.localeCompare(a.name);
            }
            if (sorting_value === "lowest") {
                return a.price - b.price;
            }
            if (sorting_value === "highest") {
                return b.price - a.price;
            }
        }
        newSortData = tempSortProduct.sort(compare);
        if (state.sorting_value === "default") {
            newSortData = tempSortProduct;
        }
        return {
            ...state,
            filter_products: newSortData
        }
    }
    else if (action.type === "UPDATE_FILTER") {
        const { name, value } = action.payload;
        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value
            }
        }
    }
    else if (action.type === "FILTER_PRODUCTS") {
        let { all_products } = state;
        let tempSortProduct = [...all_products];

        const { text, category, company, color, price } = state.filters;

        if (text) {
            tempSortProduct = tempSortProduct.filter((curr) => {
                return curr.name.toLowerCase().includes(text);
            })
        }

        if (category !== "All") {
            tempSortProduct = tempSortProduct.filter((curr) => {
                return curr.category === category;
            })
        }

        if (company !== "All") {
            tempSortProduct = tempSortProduct.filter((curr) => {
                return curr.company === company;
            })
        }

        if (color !== "All") {
            tempSortProduct = tempSortProduct.filter((curr) => {
                return curr.colors.includes(color);
            })
        }

        if (price) {
            tempSortProduct = tempSortProduct.filter((curr) => {
                return curr.price <= price;
            })
        }

        return {
            ...state,
            filter_products: tempSortProduct
        }
    }
    else if (action.type === "CLEAR_FILTER") {
        return {
            ...state,
            filters: {
                ...state.filters,
                text: "",
                category: "All",
                company: "All",
                color: "All",
                price: state.filters.maxPrice,
                minPrice: 0,
            }
        }
    }
}

export default FilterReducer