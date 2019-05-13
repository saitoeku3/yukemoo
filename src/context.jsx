import React, { useReducer, createContext } from 'react'

const initialState = {
  imageUrl: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IMAGE_URL':
      return {
        ...state,
        imagePath: (state.imageUrl = action.value)
      }
    case 'CLEAR_IMAGE_URL':
      return {
        ...state,
        imagePath: (state.imageUrl = '')
      }
    default:
      return state
  }
}

const rootContext = createContext()

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <rootContext.Provider value={{ state, dispatch }}>{children}</rootContext.Provider>
}

export { rootContext, Provider }
