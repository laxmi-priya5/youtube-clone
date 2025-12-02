import React from 'react'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const menuOpen = useSelector((Store)=>Store.app.isMenuOpen);

  if(!menuOpen) return null;
  return (
    <div className='shadow-lg w-50  h-screen fixed left-0 top-20 '>
       
       <div className='p-4 m-auto gap-5'>
        <div><h3>Home</h3></div>
       <div><h3>Shorts</h3></div>
       
       </div>
       <hr/>
       <div className='p-4'>
        <h3>Subscription</h3>
       <h3>setting</h3>
       <h3>you</h3>
       <h3>Explore</h3>
       </div>
    </div>
  )
}

export default Sidebar