import React from 'react'
import Catagory from './Catagory'
import VideoContainer from './videoContainer'

const MainContainer = () => {
  return (
    <div className='p-5 ml-50 mt-20'>
      <Catagory/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer