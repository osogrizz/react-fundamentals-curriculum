import React from 'react'
import ReactDOM from 'react-dom'
import {Home} from './Home'
require('./index.css')

class App extends React.Component {
  render() {
    return (
      <div className='home-container'>

        <Home />

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
