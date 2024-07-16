import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Contact from '../../components/ContactUs/Contact'
import Aboutus from '../../components/AboutUs/Aboutus'
import Cheif from '../../components/Cheif/Cheif'
import Introduction from '../../components/Introduction/Introduction'
import Awards from '../../components/Awards/Awards'
import Gallery from '../../components/Gallery/Gallery'
const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <Aboutus />
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      <Cheif />
      <Introduction />
      <Awards />
      <Gallery />
      <AppDownload/>
      <Contact />
    </>
  )
}

export default Home
