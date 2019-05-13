import React, { useState, useEffect } from 'react'
import { Steam } from './Steam'
import { UploadedImage } from './UploadedImage'

export const ImageWithSteam = () => {
  const DEFAULT_STEAM_COUNT = 8
  const [count, setCount] = useState(DEFAULT_STEAM_COUNT)
  const steams = []

  for (let i = 0; i < DEFAULT_STEAM_COUNT; i++) {
    steams.push(<Steam key={i} num={i} count={count} />)
  }

  useEffect(() => {
    return setCount(DEFAULT_STEAM_COUNT)
  }, [])

  return (
    <div onClick={() => setCount(count - 1)}>
      <UploadedImage />
      {steams}
    </div>
  )
}
