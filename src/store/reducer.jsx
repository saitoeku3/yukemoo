export const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_IMAGE_URL':
      return {
        ...state,
        imagePath: state.imageUrl = action.value
      }
    case 'CLEAR_IMAGE_URL':
      return {
        ...state,
        imagePath: state.imageUrl = ''
      }
    default:
      return state
  }
}
