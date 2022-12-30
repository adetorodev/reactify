import React, { Component } from 'react'
import { UserConsumer } from './UseContext'

export class ComptF extends Component {
  render() {
    return (
      <UserConsumer >
        {
            (username) => {
                return <h2>Hello {username}</h2>
            }
        }
      </UserConsumer>
    )
  }
}