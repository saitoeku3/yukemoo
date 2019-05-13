import React, { useContext } from 'react'
import styled from 'styled-components'
import { UploadButton } from './UploadButton'
import { DeleteButton } from './DeleteButton'
import { rootContext } from '../context'

export const FloatingButton = () => {
  const { state } = useContext(rootContext)
  const buttons = state.imageUrl ? <DeleteButton /> : <UploadButton />

  return <Wrapper>{buttons}</Wrapper>
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 25px;
  right: 25px;
  z-index: 1;
`
