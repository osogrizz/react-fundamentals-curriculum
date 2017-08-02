import React from 'react'

export class Home extends React.Component {


  render() {
    return (
      <div className='search-container'>
          <h1 className='header'>Enter a City and State</h1>
          <input type='text' className='' placeholder='Berlin,DE'/>
          <button type='submit' value='Submit'>Get Weather</button>
      </div>
    )
  }
}
