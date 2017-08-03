import React from 'react'
let api = '../utils/api'

export class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: ''
    }
    this.handleLocation = this.handleLocation.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  handleSubmit(e) {
    api.getCurrentWeather(this.state.location)
      .then(function(res) {
        console.log(res)
      })
      this.props.onSubmit(this.state.location)

      this.setState({
        location: ''
      })
      e.preventDefault()
  }

  render() {
    return (
      <div className='search-container'>
          <h1 className='header'>Enter a City and State</h1>
          <input type='text' placeholder='Berlin,DE'
                  value={this.state.value}
                  onChange={this.handleLocation}
          />
          <button
                  className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
                  type='submit'
                  value='Submit'
                  onClick={this.handleSubmit}>
            Get Weather
          </button>
      </div>
    )
  }
}
