import React from 'react'
let api = '../utils/api'


export class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loc: ''
    }
    this.handleLocation = this.handleLocation.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // componentDidMount() {
  //   let self = this
  //   fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=ea6f972185856f6139efb699b08a38f7 ')
  //     .then(function(response) {
  //       return response.json()
  //     }).then(function(city) {
  //       self.setState({city}, () => console.log(self.state))
  //     })
  // }

  handleLocation(e) {
    this.setState({
      loc: e.target.value
    })
  }

  handleSubmit(e) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.loc}&type=accurate&APPID=ea6f972185856f6139efb699b08a38f7`)
      .then((res) => res.json())
        .then((loc) =>  this.setState({loc}, () => console.log(this.state)) )
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
