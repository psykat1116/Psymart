import React, { useContext } from 'react'
import FileContext from '../Context/FilterContext'
import { FaCheck } from 'react-icons/fa'
import FormatPrice from '../Helper/FormatPrice'

const Filter = () => {
  const context = useContext(FileContext);
  const { filters: { text, category, color, price, maxPrice, minPrice }, updateFilter, all_products,clearFilter } = context;

  const getUniqueData = (data, property) => {
    let newVal = data.map((curr) => {
      return curr[property];
    })
    if (property === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    return (newVal = ["All", ...new Set(newVal)]);
  }

  const catagoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorOnlyData = getUniqueData(all_products, "colors");

  return (
    <div>
      <>
        <div className="search-box">
          <form onSubmit={(e) => { e.preventDefault() }}>
            <input type='text' placeholder='SEARCH' id='search' name='text' autoFocus onChange={updateFilter} value={text} />
          </form>
        </div>
        <div className="catagory">
          <h4>Category</h4>
          <ul>
            {
              catagoryOnlyData.map((e, ind) => {
                return <button key={ind} name='category' onClick={updateFilter} className={category === e ? "active" : ""} value={e}>{e}</button>;
              })
            }
          </ul>
        </div>
        <div className="company">
          <h4>Company</h4>
          <select onChange={updateFilter} name='company'>
            {
              companyOnlyData.map((e, ind) => {
                return <option key={ind} value={e}>{e}</option>;
              })
            }
          </select>
        </div>
        <div className="colors">
          <h4>Colors</h4>
          <div className="color">
            {
              colorOnlyData.map((e, ind) => {
                return <button key={ind} value={e} style={{ backgroundColor: e }} name='color' type='button' className={color === e ? "active" : ""} onClick={updateFilter}>{e === "All" ? "All" : (color === e ? <FaCheck /> : null)}</button>;
              })
            }
          </div>
        </div>
        <div className="price">
          <h4>Price</h4>
          <label><FormatPrice price={price} /></label>
          <input type='range' name='price' min={minPrice} max={maxPrice} value={price} onChange={updateFilter} />
        </div>
        <div className="clear">
          <button onClick={clearFilter}>CLEAR FILTER</button>
        </div>
      </>
    </div>
  )
}

export default Filter