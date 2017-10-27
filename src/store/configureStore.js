import 'babel-core/register'
import 'babel-polyfill'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import main from '../sagas'

// middleware
export const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware
      )
    )
  )
}
