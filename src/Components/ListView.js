import React from 'react'
import Lproduct from './Lproduct'

const ListView = ({products}) => {
  return (
    <div id='listview'>
      {
        products.map((curr) => {
          return <Lproduct key={curr.id} curr={curr} />
        })
      }
    </div>
  )
}

export default ListView