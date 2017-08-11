import React from 'react'
import {Home} from './Home'
import {Nav} from './Nav'
import {Forecast} from './Forecast'
let ReactRouter = require('react-router-dom')
let Router = ReactRouter.BrowserRouter
let Route = ReactRouter.Route
let Switch = ReactRouter.Switch

let api = '../utils/api'


export class App extends React.Component {
  render() {
    return (
      <Router>

        <div className='home-container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast}/>
          </Switch>
        </div>
      </Router>

    )
  }
}
