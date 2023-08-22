import React from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

const ItemAmount = (props) => {
    const { amount, setDecrease, setIncrease, prefix } = props;
    return (
        <div id='cartitem'>
            <div className="item-toggle">{prefix}{
                <>
                    <button onClick={setDecrease} id='plus'><HiMinus /></button>
                    <p>{amount}</p>
                    <button onClick={setIncrease} id='minus'><HiPlus /></button>
                </>
            }
            </div>
        </div>
    )
}

export default ItemAmount