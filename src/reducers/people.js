const initialState = {
  past: [],
  current: [],
  future: [],
  archived: null,
}


export default function reducer(state = initialState, action) {
  const { past, current, future } = state

  switch (action.type) {
    case 'UPDATE_PEOPLE': {

      return {
        ...state,
        current: action.payload,
      }
    }

    case 'REMOVE_PERSON': {
      const person = current.find(item => item.Name === action.payload)
      const index = current.indexOf(person)

      return {
        ...state,
        past: [
          person,
          ...past
        ],
        current: [
          ...current.slice(0, index),
          ...current.slice(index + 1)
        ],
        archived: null,
      }
    }

    case 'UNDO': {
      // if past stack is empty return
      if (!past.length) {
        return state
      }
      const person = past[0]

      return {
        ...state,
        past: [
          ...past.slice(1)
        ],
        current: [
          person,
          ...current
        ],
        future: [
          person,
          ...future,
        ]
      }
    }

    case 'REDO': {
      if(!future.length) {
        return state
      }

      const person = future[0]
      const index = current.indexOf(person)

      return {
        ...state,
        current:[
          ...current.slice(0, index),
          ...current.slice(index + 1)
        ],
        future: [
          ...future.slice(1)
        ],
        past: [
          person,
          ...past,
        ]
      }
    }

    case 'ARCHIVE': {
      const index = current.indexOf(action.payload)

      return {
        ...state,
        archived: action.payload,
        current: [
          ...current.slice(0, index),
          ...current.slice(index + 1)
        ]
      }
    }

    case 'REVERT': {
      return {
        ...state,
        current: [
          state.archived,
          ...state.current
        ],
        archived: null,
      }
    }

    default:
      return state

  }
}
