import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createElement(
  'div',
  {
    style: { textAlign : 'center' },
  },
  "Hello World"
)

ReactDOM.render(App, document.getElementById('app'))
