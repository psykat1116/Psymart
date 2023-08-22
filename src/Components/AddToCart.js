import React, { useState, useContext } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import ItemAmount from './ItemAmount';
import Cartcontext from '../Context/Cartcontext'

const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;
    const { addToCart } = useContext(Cartcontext);
    const [color, setcolor] = useState(colors[0]);
    const [amount, setamount] = useState(1)

    const setDecrease = () => {
        amount > 1 ? setamount(amount - 1) : setamount(1);
    }

    const setIncrease = () => {
        amount < stock ? setamount(amount + 1) : setamount(stock);
    }

    return (
        <div id='colors'>
            <p>
                Colors:{
                    colors.map((currcolor) => {
                        return (
                            <button key={id} style={{ backgroundColor: currcolor }} className={currcolor === color ? 'active' : ''} onClick={() => setcolor(currcolor)}>
                                {currcolor === color ? <FaCheck className='check' /> : null}
                            </button>
                        )
                    })
                }
            </p>
            <ItemAmount amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} prefix="No of items: "/>
            <Link to='/cart' onClick={() => addToCart(id, color, amount, product)}><button>Add To Cart</button></Link>
        </div>
    )
}

export default AddToCart