import React, { useContext } from 'react'
import styled from 'styled-components'
import { Store } from '../../store/context'

export const UploadedImage = () => {
  const { state } = useContext(Store)

  return (
    <Image
      src={state.imagePath}
      width={window.innerWidth}
      height={window.innerHeight}
      alt=""
    />
  )
}

const Image = styled.img`
  object-fit: cover;
`
