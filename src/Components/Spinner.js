import React, { Component } from 'react'
import spinner from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img className='text-centered' src={spinner} alt="Loading" />
        
      </div>
    )
  }
}

export default Spinner
