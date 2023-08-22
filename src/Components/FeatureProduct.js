import React, { useContext } from 'react'
import Econtext from '../Context/Econtext'
import Fproduct from './Fproduct'

const FeatureProduct = () => {
    const context = useContext(Econtext);
    const { isLoading, featureProducts } = context;

    if (isLoading) {
        return (
            <div id='featureproduct'>
                <h1>Loading.....</h1>
            </div>
        )
    }

    return (
        <div id='featureproduct'>
            <h4>Check Now!.....</h4>
            <h2>Our Feature Services</h2>
            <div className="fgallery">
                {
                    featureProducts.map((curr) => {
                        return <Fproduct key={curr.id} curr={curr} />
                    })
                }
            </div>
        </div>
    )
}

export default FeatureProduct