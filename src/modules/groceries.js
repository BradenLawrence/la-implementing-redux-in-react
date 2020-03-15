const initialState = {
  groceryList: [],
  name: ''
}

const ADD_GROCERY = "ADD_GROCERY"
const addNewGrocery = (grocery) => {
  return {
    type: ADD_GROCERY,
    grocery
  }
}

const groceries = (state = initialState, action) => {
  switch(action.type) {
    case ADD_GROCERY:
      const updatedGroceries = state.groceryList.concat(action.grocery)
      return {
        ...state,
        groceryList: updatedGroceries
      }
    default:
      return state
  }
}

export {
  addNewGrocery,
  groceries
}
