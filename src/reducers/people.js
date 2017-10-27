const initialState = {
  past: [],
  current: [],
  future: [],
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_PEOPLE': {

      return {
        ...state,
        current: action.payload,
      }
    }

    case 'REMOVE_PERSON': {
      const { id } = action.payload
      const item = state.find(item => item.Id === id)
      const index = state.indexOf(item)

      return {
        ...state,
        people: [
          ...state.people.slice(0, index),
          ...state.people.slice(index + 1)
        ]
      }
    }

    case 'UNDO': {

    }

    case 'REDO': {

    }

    default:
      return state

  }
}
