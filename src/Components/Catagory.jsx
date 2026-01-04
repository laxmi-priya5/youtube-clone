import React from 'react'
import Button from './Button'
const Catagory = () => {
  return (
    <div className='mb-5 flex gap-4 overflow-hidden'>
        
        <Button name='All'/>
        <Button name='Music'/>
        <Button name='Indian Idol'/>
        <Button name='Podcast'/>
        <Button name='Mixes'/>
        <Button name='Live'/>
        <Button name='Self-confidence'/>
        <Button name='Intelligence'/>
        <Button name='Practice'/>
        
    </div>
  )
}

export default Catagory