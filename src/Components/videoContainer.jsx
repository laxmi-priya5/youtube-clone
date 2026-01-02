import React from 'react'
import { YOU_TUBE_API } from '../utils/Constnts'
import  {useState , useEffect}  from 'react'
import VideoCard from './Video'
import { Link } from 'react-router-dom'
const VideoContainer = () => {
  const [videos , setVideos] = useState([]);

  useEffect(()=>{
    getFromApi();

  },[])
  const getFromApi = async()=>{
      const data = await fetch(YOU_TUBE_API);
      const json = await data.json();
      console.log("json",json)
      setVideos(json.items);
    
   
  }
  return (
    <div className='grid grid-cols-4 gap-3'>
        {/* {<VideoCard info={videos[0]}/>} */}
        {videos.map((video , index)=> <Link to={`/watch?v=${video.id}`} key={index}><VideoCard  info={video}/></Link>)}
    </div>
  )
}

export default VideoContainer