import React, { Component } from 'react'
import { ComptF } from './ComptF'
import { UserContext } from './UseContext'

export class ComtE extends Component {
    static contextType = UserContext
  render() {
    return (
      <div>
        component E context {this.context}
        <ComptF />
      </div>
    )
  }
}

// ComtE.contextType = UserContext