import React from 'react'
import Fproduct from './Fproduct'

const GridView = ({ products }) => {
    return (
        <div id='gridview'>
            {
                products.map((curr) => {
                    return <Fproduct key={curr.id} curr={curr} />
                })
            }
        </div>
    )
}

export default GridView