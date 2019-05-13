import React from 'react'

import { Steam } from './Steam'
import { UploadedImage } from './UploadedImage'

export const ImageWithSteam = () => {
  const steams = []
  for(let i = 0; i < 5; i++ ) {
    steams.push(<Steam />)
  }

  return (
    <div>
      <UploadedImage />
      {steams}
    </div>
  )
}
