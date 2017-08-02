import React from 'react'

export class Home extends React.Component {


  render() {
    return (
      <div className='search-container'>
          <h1 className='header'>Enter a City and State</h1>
          <input type='text' placeholder='Berlin,DE'/>
          <button
                  className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
                  type='submit'
                  value='Submit'>
            Get Weather
          </button>
      </div>
    )
  }
}
