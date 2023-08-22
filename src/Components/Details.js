import React from 'react'
import FormatPrice from '../Helper/FormatPrice'
import Star from './Star';
import AddToCart from './AddToCart';
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";

const Details = ({ details }) => {
  const { name, company, price, description, stock, reviews, stars } = details;
  return (
    <div id='right'>
      <h2>{name}</h2>
      <Star stars={stars} reviews={reviews} />
      <p id='mrp'>MRP: {
        <del><FormatPrice price={price + 250000} /></del>
      }</p>
      <p id='deal'>Deal of the Day: <FormatPrice price={price} /></p>
      <p>{description}</p>
      <ul>
        <li><TbTruckDelivery id='icon' /><label>Free Delivery</label></li>
        <li><TbReplace id='icon' /><label>30 Days Replacement</label></li>
        <li><BiShieldQuarter id='icon' /><label>2 Year Warranty</label></li>
      </ul>
      <hr />
      <p id='avail'>Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span></p>
      <p id='id'>ID: <span>Psykat</span></p>
      <p id='brand'>Brand: <span>{company}</span></p>
      {stock > 0 && <AddToCart product={details} />}
    </div>
  )
}

export default Details