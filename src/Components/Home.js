import React from 'react'
import Welcome from './Welcome'
import Service from './Service'
import Trust from './Trust'
import FeatureProduct from './FeatureProduct'

const Home = () => {
  const data = {
    name: "Psymart"
  }

  return (
    <>
      <div id='home'>
        <Welcome data={data} />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="trusted">
        <Trust />
      </div>
      <div id="fproduct">
        <FeatureProduct />
      </div>
    </>
  )
}

export default Home