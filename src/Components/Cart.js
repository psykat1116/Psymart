import React, { useContext } from 'react'
import Cartcontext from '../Context/Cartcontext'
import Cartitem from './Cartitem';
import { Link } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';

const Cart = () => {
    const { cart, deleteAllItem, total_amount, shipping_fee } = useContext(Cartcontext);
    return (
        <div id='cart'>
            {cart.length > 0 ?
                <div id="cartbody">
                    <div id="order-items">
                        <div className="label">
                            <h4>item</h4>
                            <h4>price</h4>
                            <h4>quantity</h4>
                            <h4>subtotal</h4>
                            <h4>remove</h4>
                        </div>
                        <hr />
                        <div className="items">
                            {
                                cart.map((e) => {
                                    return <Cartitem key={e.id} {...e} />
                                })
                            }
                        </div>
                        <hr />
                        <div className="ch-cc">
                            <Link to='/products'><button>Continue Shopping</button></Link>
                            <button onClick={deleteAllItem}>Clear Cart</button>
                        </div>
                    </div>
                    <div id="total-price">
                        <div className="total-box">
                            <div className="subtotal">
                                <p>Subtotal:</p>
                                <p><FormatPrice price={total_amount} /></p>
                            </div>
                            <div className="sfee">
                                <p>Shipping Fee:</p>
                                <p><FormatPrice price={shipping_fee} /></p>
                            </div>
                            <hr />
                            <div className="order-total">
                                <p>Order Total:</p>
                                <p><FormatPrice price={total_amount + shipping_fee} /></p>
                            </div>
                        </div>
                    </div>
                </div>
                : <><h2>No item is in the cart</h2>
                    <Link to='/products'><button id='empty-cart-button'>BACK TO SHOPPING</button></Link></>
            }
        </div>
    )
}

export default Cart