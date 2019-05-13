import React, { useContext } from 'react'
import styled from 'styled-components'
import { rootContext } from '../context'
import { ImageWithSteam } from './ImageWithSteam'
import { FloatingButton } from './FloatingButton'

export const App = () => {
  const { state } = useContext(rootContext)
  return (
    <Wrapper>
      <FloatingButton />
      {state.imageUrl ? <ImageWithSteam /> : ''}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: #222222;
`
