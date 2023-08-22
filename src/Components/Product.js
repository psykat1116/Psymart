import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Econtext from '../Context/Econtext';
import ImagePallete from './ImagePallete';
import Details from './Details';

const Product = () => {
  const { paramid } = useParams();
  const context = useContext(Econtext);
  const { getSingleProduct, isSingleLoading, Sproduct } = context;
  const url = "https://api.pujakaitem.com/api/products";

  useEffect(() => {
    getSingleProduct(`${url}?id=${paramid}`);
    //eslint-disable-next-line
  }, [])

  if (isSingleLoading) {
    return (
      <div id="single">
        <h1>Loading......</h1>
      </div>
    )
  }

  const { image } = Sproduct;

  return (
    <div id='single'>
      <div id="main">
        <ImagePallete image={image} />
        <Details details={Sproduct} />
      </div>
    </div>
  )
}

export default Product