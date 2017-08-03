import React from 'react'
import {Home} from './Home'
import {Nav} from './Nav'

let api = '../utils/api'


export class App extends React.Component {
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
