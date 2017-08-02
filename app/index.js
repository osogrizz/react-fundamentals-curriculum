import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './Home'
import { Nav } from './Nav'
require('./index.css')

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='home-container'>


          <Home />

        </div>
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
