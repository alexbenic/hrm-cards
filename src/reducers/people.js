const initialState = {
  past: [],
  current: [],
  future: [],
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
        ]
      }
    }

    case 'UNDO': {
      // if past stack is empty return
      if (!past.length) {
        return state
      }
      const person = past[0]

      console.log({
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
      });

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

      console.log({
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
      });

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

    default:
      return state

  }
}
