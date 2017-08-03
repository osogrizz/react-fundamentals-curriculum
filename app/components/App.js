import React from 'react'
import {Home} from './Home'
import {Nav} from './Nav'
let ReactRouter = require('react-router-dom')
let Router = ReactRouter.BrowserRouter
let Route = ReactRouter.Route

let api = '../utils/api'


export class App extends React.Component {
  render() {
    return (
      <Router>

        <div className='home-container'>
          <Nav />
          <Route path='/' component={Home} />
        </div>
      </Router>

    )
  }
}
