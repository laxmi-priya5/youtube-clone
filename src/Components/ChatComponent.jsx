import React from 'react'
import Chat from './Chat';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToMessage } from '../utils/chatSlice';
import { useEffect } from 'react';
import { nameList } from '../utils/Constnts';
const ChatComponent = () => {
  const dispatch= useDispatch();

  const chatMessages = useSelector((store)=>store.chat.messages)

  const nameList1 = nameList;
   function generate() {
      return nameList[Math.floor(Math.random() * nameList1.length)];
    
    };
  useEffect(()=>{

    const time = setInterval(()=>{

      //API polling
      const Name = generate();
      dispatch(addToMessage({name:Name , message:'lorem ipsum'}));
      
    } ,2000);

    return ()=>clearInterval(time);  //must use as callback
  },[])
  
  return (
    <div className='ml-5 border w-100 border-gray-300  h-[500px] p-1 overflow-y-scroll flex flex-col-reverse'>
      {chatMessages.slice(-20).map((chat , index)=><Chat key={index} name={chat.name} message={chat.message}/>)}  
      
    </div>
  )
}

export default ChatComponent;