import React from 'react'

const VideoCard = ({info}) => {
    const format = (num)=>{
        if(num >= 1_000_000) return (num/1_000_000).toFixed(1)+"M";
        else if(num >= 1_000) return (num/1_000).toFixed(1)+"K";
        else return num;
    }


    if(!info) return <h1>Loading...</h1>
    const {snippet , statistics} = info;

    const {channelTitle , thumbnails , title} = snippet ;
    const {viewCount} = statistics;
    const formattedView = format(viewCount);
  return (
   
    <div className=' p-5 w-85 rounded-lg overflow-hidden group  hover:bg-gray-200 ' >
        <img className='rounded-lg group-hover:scale-99 group-hover:rounded-none transition-transform duration-300' src={thumbnails.medium.url }/>
        <h2 className='mb-0.5'>{title}</h2>
        <p className='text-gray-500'>{channelTitle}</p>
        <p className='text-gray-500'>{formattedView}</p>
    </div>

  )
}

export default VideoCard