const updatePeople = dispatch => people => {
  dispatch({
    type: 'UPDATE_PEOPLE',
    payload: people,
  })
}

const deletePerson = dispatch => name => {
  dispatch({
    type: 'REMOVE_PERSON',
    payload: name,
  })
}

const archive = dispatch => person => {
  dispatch({
    type: 'ARCHIVE',
    payload: person,
  })
}

const remove = dispatch => name => {
  dispatch({
    type: 'REMOVE',
    payload: name,
  })
}

const undoChange = dispatch => {
  dispatch({
    type: 'UNDO',
  })
}

const redoChange = dispatch => {
  dispatch({
    type: 'REDO'
  })
}

const cancelDelete = dispatch => {
  dispatch({
    type: 'CANCEL_DELETE'
  })
}

const revert = dispatch => {
  dispatch({
    type: 'REVERT'
  })
}

export {
  updatePeople,
  deletePerson,
  undoChange,
  redoChange,
  cancelDelete,
  revert,
  remove,
  archive,
}
