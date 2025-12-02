import React from 'react'

import { useSearchParams } from 'react-router-dom'
import { closeMenu} from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { COMMENT_DATA } from '../utils/Constnts'
import Comments from './Comments'
import ChatComponent from './chatComponent'
const Watch = () => {
  //to qury from a string use useSearhParams
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v');
 
  const dispatch= useDispatch();
  dispatch(closeMenu());

  
  return (
    <div className='flex flex-col p-10 w-full'>
   
    <div className='mt-20 flex flex-row '>
      <iframe width="1000" height="500"
       src={"https://www.youtube.com/embed/"+videoId} 
       title="YouTube video player" framebrder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

      </iframe>
      <div >
      
      <ChatComponent/>
      
    </div>
 </div>
    
    <div>
       <h2 className='font-bold'>Comments</h2>
        {COMMENT_DATA.map((comment , index)=><Comments key={index} comment={comment}/>)}
      </div>
   </div> 
  )
}

export default Watch