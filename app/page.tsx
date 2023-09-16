"use client"

import Body from '@/components/Body'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useState } from 'react'

export default function Home() {

  const [isEditing, setIsEditing] = useState(false)

  function handleClick() {
    setIsEditing(!isEditing)
  }

  return (
    <div className='flex flex-col p-12 gap-6 justify-center drop-shadow-lg items-center'>
      <Button isEditing={isEditing} onClick={handleClick}/>
      <div className='flex lg:w-[66%] bg-slate-400 flex-col rounded-3xl max-w-7xl'>
        <Header isEditing={isEditing}/>
        <Body isEditing={isEditing}/>
        <Footer isEditing={isEditing}/>
      </div>
    </div>
  )
}
