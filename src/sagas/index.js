import { select, take, put, call, spawn, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as Action from '../actions'

function* onRemove(action) {
  const name = action.payload
  const person = yield select(store => store.people.current.find(item => item.Name === name))

  // Move person to archived and remove it from current
  yield put({
    type: 'ARCHIVE',
    payload: person,
  })

  const { cancel, del } = yield race({
    cancel: take(action => action.type === 'CANCEL_DELETE'),
    del: call(delay, 5000),
  })

  if(cancel) {
    yield put({
    type: 'REVERT'
  })
  } else {
    yield put({
    type: 'REMOVE_PERSON',
    payload: name,
  })
  }
}

export default function* main() {
  while(true) {
    const action = yield take('REMOVE')

    yield spawn(onRemove, action)
  }
}
