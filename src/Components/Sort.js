import React, { useContext } from 'react'
import { HiViewGrid, HiViewList } from 'react-icons/hi'
import FilterContext from '../Context/FilterContext'

const Sort = () => {
  const context = useContext(FilterContext);
  const { setGridView, setListView, grid_view, filter_products, sorting } = context;
  return (
    <>
      <div className="view-type">
        <button className={grid_view ? 'active' : ""} onClick={setGridView}><HiViewGrid /></button>
        <button className={!grid_view ? 'active' : ""} onClick={setListView}><HiViewList /></button>
      </div>
      <p className='numofproduct'>{filter_products.length} total products</p>
      <select className='sortitem' onChange={sorting} id='sort'>
        <option value="default">Default</option>
        <option value="lowest">Price(lowest)</option>
        <option value="highest">Price(highest)</option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>
    </>
  )
}

export default Sort