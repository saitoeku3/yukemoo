import React, {useContext } from 'react'
import styled from 'styled-components'
import { Store } from '../../store/context'

import { ImageWithSteam } from '../organisms/ImageWithSteam'
import { FloatingButton } from '../molecules/FloatingButton'

export const App = () => {
  const { state } = useContext(Store)

  return (
    <Container>
      <FloatingButton />
      {state.imageUrl ? <ImageWithSteam /> : ''}
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background-color: #222222;
`
