import React from 'react'
let api = '../utils/api'


export class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navLocation: ''
    }
    this.handleNavLocation = this.handleNavLocation.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNavLocation(e) {
    this.setState({
      navLocation: e.target.value
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
      <div className='mdl-layout mdl-js-layout'>

        <header className='mdl-layout__header mdl-layout__header--scroll'>
          <div className='mdl-layout__header-row'>

            <span className='mdl-layout-title'>BY JUPITER!</span>
            <div className='mdl-layout-spacer'></div>

              <div className='mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right'>

                <label className='mdl-button mdl-js-button mdl-button--icon'
                       htmlFor='fixed-header-drawer-exp'>
                  <i className="material-icons">search</i>
                </label>

                <div className='mdl-textfield__expandable-holder'>
                  <input className="mdl-textfield__input" type="text" name="sample"
                         id="fixed-header-drawer-exp"
                         placeholder='Get Weather'
                         value={this.state.value}
                         onChange={this.handleNavLocation}
                         onSubmit={this.handleSubmit}
                       />
               </div>

            </div>
          </div>
        </header>
      </div>
    )
  }
}
