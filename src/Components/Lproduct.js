import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';

const Lproduct = ({ curr }) => {
    const { id, name, image, price, description } = curr;
    return (
        <div className="listbox">
            <div className="card">
                    <img src={image} alt="not available" />
            </div>
            <div className="name-price">
                <small>{name}</small>
                <small><FormatPrice price={price} /></small>
                <small>{description.slice(0,148)}. . . . .</small>
                <Link to={`/product/${id}`}><button>READ MORE</button></Link>
            </div>
        </div>
    )
}

export default Lproduct