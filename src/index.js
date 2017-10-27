import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App.jsx'
import configureStore, { sagaMiddleware } from './store/configureStore'
import main from './sagas'

const store = configureStore()

sagaMiddleware.run(main)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))
