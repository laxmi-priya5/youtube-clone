import React from 'react'

const Chat = ({name , message}) => {
  return (
    <div className=' flex text-center shadow-sm'>
        <img  className='w-9' src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"/>
        <span className='px-2 font-bold' >{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default Chat