const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload
        let isExist = state.cart.find((e) => e.id === id + color);
        if (isExist) {
            let updatedProduct = state.cart.map((e) => {
                let newAmount;
                if (e.id === id + color) {
                    newAmount = e.amount + amount >= product.stock ? product.stock : e.amount + amount;
                    return {
                        ...e,
                        amount: newAmount
                    };
                } else {
                    return e;
                }
            })
            return {
                ...state,
                cart: updatedProduct
            }
        }
        else {
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }
    }
    if (action.type === "DECREASE_ITEM") {
        let data = state.cart.map((e) => {
            if (e.id === action.payload) {
                let newAmount = e.amount - 1 < 1 ? 1 : e.amount - 1;
                return {
                    ...e,
                    amount: newAmount
                }
            } else {
                return e;
            }
        })
        return {
            ...state,
            cart: data,
        }
    }
    if (action.type === "INCREASE_ITEM") {
        let data = state.cart.map((e) => {
            if (e.id === action.payload) {
                let newAmount = e.amount + 1 > e.max ? e.max : e.amount + 1;
                return {
                    ...e,
                    amount: newAmount
                }
            } else {
                return e;
            }
        })
        return {
            ...state,
            cart: data,
        }
    }
    if (action.type === "DELETE_ITEM") {
        let updatedCart = state.cart.filter((e) => {
            return e.id !== action.payload;
        })
        return {
            ...state,
            cart: updatedCart,
        }
    }
    if (action.type === "DELETE_ALL_ITEM") {
        return {
            ...state,
            cart: [],
        }
    }
    if (action.type === "UPDATE_ITEM_NO") {
        let { cart } = state;
        return {
            ...state,
            total_item: cart.length,
        }
    }
    if (action.type === "GET_TOTAL_PRICE") {
        let { cart } = state;
        let totalPrice = 0;
        cart.forEach((e) => {
            totalPrice += e.amount * e.price;
        });
        return {
            ...state,
            total_amount: totalPrice,
        }
    }
    return state;
}

export default CartReducer