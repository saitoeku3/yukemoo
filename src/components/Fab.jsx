import React, { useContext } from 'react'
import styled from 'styled-components'
import { UploadButton } from './UploadButton'
import { DeleteButton } from './DeleteButton'
import { rootContext } from '../context'

export const Fab = () => {
  const { state } = useContext(rootContext)
  return <Wrapper>{state.imageUrl ? <DeleteButton /> : <UploadButton />}</Wrapper>
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 25px;
  right: 25px;
  z-index: 1;
`
