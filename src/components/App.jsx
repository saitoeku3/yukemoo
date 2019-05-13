import React, { useContext } from 'react'
import styled from 'styled-components'
import { rootContext } from '../context'
import { ImageWithSteam } from './ImageWithSteam'
import { FloatingButton } from './FloatingButton'

export const App = () => {
  const { state } = useContext(rootContext)

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
