import React from 'react'
import Slider from '../../components/slider/Slider'
import './home.scss'
import FeaturedProducts from '../../components/featuredProducts/featuredProducts'
import Categories from '../../components/categories/Categories'

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="trending" />
      <FeaturedProducts type="featured" />
      <Categories />
    </div>
  )
}

export default Home