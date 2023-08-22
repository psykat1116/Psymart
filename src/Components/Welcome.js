import React from 'react'
import welcomeImg from '../icon/Welcome.jpg'
import { Link } from 'react-router-dom'

const Welcome = (props) => {

    const { name } = props.data;

    return (
        <div id='welcome'>
            <div className="left">
                <p>WELCOME TO<br /><label>{name}</label></p>
                <p>We're thrilled to welcome you to your go-to destination for the latest and greatest in tech gadgets and gizmos.From sleek smartphones to powerful laptops, smart home wonders to futuristic wearables, we've curated a collection that showcases the very best in technology. Explore and experience the future firsthand as you browse through our selection, handpicked to cater to your every need and desire.Our mission is to not only provide you with the finest tech products, but also to create an unparalleled shopping experience.</p>
                <button><Link to='/products'>SHOP NOW</Link></button>
            </div>
            <div className="right">
                <img src={welcomeImg} alt="Not Available" />
                <div className='box'></div>
            </div>
        </div>
    )
}

export default Welcome