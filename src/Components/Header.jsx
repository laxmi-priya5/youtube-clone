import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOU_TUBE_SEARCH_API } from '../utils/Constnts';
import { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery , setSearchQuery]=useState("");
  const [suggestion , setSuggestion] = useState([])
  const dispatch = useDispatch(); 

  const searchCache = useSelector((store)=>store.search) 
  
  useEffect(()=>{   //check functionality of return something from useEffect
   
      const find = setTimeout(
        ()=>{
          if(searchCache[searchQuery]) setSuggestion(searchCache[searchQuery])
          else getSuggestion()} ,200);
      
      return ()=>clearTimeout(find);
  },[searchQuery])



  const getSuggestion = async ()=>{
 
   const data = await fetch(YOU_TUBE_SEARCH_API+searchQuery);
   const json = await data.json();

   console.log("API called-" , json[0])
   setSuggestion(json[1])
   dispatch(cacheResults({[searchQuery]:json[1]}));
  }
  return (
    <div className='flex h-20 p-5 shadow-lg fixed top-0 w-screen bg-white'>
        <div className='flex  gap-4 w-1/4'>
            <span ><img className='w-6' src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png" 
             onClick={()=>dispatch(toggleMenu())}/></span>
            <span><img className='w-25' src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png' alt='youtube-logo'/></span>
        </div>
        <div className='w-2/4 '>
        <div className='flex'>
        <input className=' w-5/6 rounded-l-full border py-1 px-4 border-gray-300  '
          placeholder='search....' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
         <button className='  w-fit px-4   rounded-r-full bg-gray-200 text-xl '>🔍</button>
        </div>
        {searchQuery && <div className='fixed bg-white shadow-sm border border-gray-100 w-150 ml-5 mt-1 rounded'>
            <ul>
              {suggestion.map((s)=><li key={s} className='border border-gray-50 hover:bg-gray-300 cursor-pointer  px-4 py-2   '><span className='mr-2 text-xl'>🔍</span>
              {s}</li>)}
                
            </ul>
        </div>}
        </div>
        <div className='w-1/4 pl-70'><img className='w-10' src='https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg'/></div>
    </div>
  )
}

export default Header