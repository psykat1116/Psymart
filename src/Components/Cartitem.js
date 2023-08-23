import React, { useContext, useState } from 'react'
import Cartcontext from '../Context/Cartcontext'
import FormatPrice from '../Helper/FormatPrice'
import { MdDelete } from 'react-icons/md'
import ItemAmount from './ItemAmount'

const Cartitem = ({ id, name, image, color, amount, price }) => {
    const { deleteItem, setIncrease, setDecrease } = useContext(Cartcontext);
    const [swidth, setswidth] = useState(window.screen.width);
    window.addEventListener("resize", () => {
        setswidth(window.screen.width);
    })
    return (
        <div id='unique-item'>
            <div className="details">
                <figure>
                    <img src={image} alt={id} />
                </figure>
                <div className="details-nc">
                    <h5>{name}</h5>
                    <h5>Color: <button style={{ backgroundColor: color }}></button></h5>
                </div>
            </div>
            {swidth > 767 &&
                <div className="unit-price">
                    <FormatPrice price={price} />
                </div>
            }
            <div className="quanity-format">
                <ItemAmount amount={amount} setDecrease={() => { setDecrease(id) }} setIncrease={() => { setIncrease(id) }} />
            </div>
            {swidth > 767 &&
                <div className="subtotal-price">
                    <FormatPrice price={price * amount} />
                </div>
            }
            <div className="remove-item">
                <MdDelete style={{ color: "red", fontSize: "25px", cursor: "pointer" }} onClick={() => { deleteItem(id) }} />
            </div>
        </div>
    )
}

export default Cartitem