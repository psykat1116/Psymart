import React, { useContext } from 'react'
import FileContext from '../Context/FilterContext'
import ListView from './ListView';
import GridView from './GridView';

const ProductList = () => {
  const context = useContext(FileContext);
  const { filter_products, grid_view } = context;

  if (grid_view === true) {
    return (
      <GridView products={filter_products} />
    )
  }
  else {
    return (
      <ListView products={filter_products} />
    )
  }
}

export default ProductList