import React from 'react'

const Comments = ({comment}) => {
  return (
    <div className='border m-3 border-gray-400 '>
       <div className='flex'>
       <img  className='w-12' src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"/>
       <div>
       <h2>{comment.name}</h2>
       <p>{comment.comment}</p>
       </div>
       </div>
       <div>
       
       {comment.replies?.map((reply,index)=><Comments key={index}   comment={reply}/>)}
       </div>
       
     </div>
   )
}

export default Comments