import React from 'react'
import Catagory from './Catagory'
import VideoContainer from './videoContainer'
import { useSelector } from 'react-redux'
const MainContainer = () => {
  const toggle = useSelector(store=>store.app.isMenuOpen)
  console.log(toggle)
  return (
    <div className='p-5  mt-20' style={{ marginLeft: toggle ? "200px" : "0px" }}>
      <Catagory/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer