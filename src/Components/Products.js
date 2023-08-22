import React from 'react'
import ProductList from './ProductList'
import Filter from './Filter'
import Sort from './Sort'

const Products = () => {
  return (
    <div id='allitems'>
      <div className="leftcol">
        <Filter />
      </div>
      <div className="rightcol">
        <div className="filter">
          <Sort />
        </div>
        <div className="allproduct">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Products