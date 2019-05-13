import React, { useContext } from 'react'
import styled from 'styled-components'
import { rootContext } from '../context'

export const UploadedImage = () => {
  const { state } = useContext(rootContext)

  return <Image src={state.imageUrl} width={window.innerWidth} height={window.innerHeight} alt="" />
}

const Image = styled.img`
  object-fit: cover;
`
