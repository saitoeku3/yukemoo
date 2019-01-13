import React, { useContext } from 'react'
import styled from 'styled-components'
import { Store } from '../../store/context'

import { UploadButton } from '../atoms/UploadButton'
import { DeleteButton } from '../atoms/DeleteButton'

export const FloatingButton = () => {
  const { state } = useContext(Store)
  const buttons = state.imageUrl ? <DeleteButton /> : <UploadButton />

  return (
    <Wrapper>
      {buttons}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 25px;
  right: 25px;
  z-index: 1;
`
