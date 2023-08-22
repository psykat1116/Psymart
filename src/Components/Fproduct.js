import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';

const Fproduct = ({curr}) => {
    const { id, name, image, price, category } = curr;
    return (
        <Link to={`/product/${id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt="not available"/>
                    <figcaption className='caption'>{category}</figcaption>
                </figure>
            </div>
            <div className="name-price">
                <small>{name}</small>
                <small><FormatPrice price={price}/></small>
            </div>
        </Link>
    )
}

export default Fproduct