import React, { Component } from 'react'
import styled from 'styled-components'
import ee from 'event-emitter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const NotificationDiv = styled.div`
  background-color: #444;
  color: white;
  padding: 16px;
  border-radius: 3px;
  position: fixed;
  top: ${props => props.top}px;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 40%;
  z-index: 999;
  transition: top 0.5s ease;
`

const emitter = new ee()

export const notify = (msg) => {
  emitter.emit('notification', msg)
}

class Notification extends Component {
  constructor (props) {
    super(props)

    this.state = {
      top: -100,
      msg: ''
    }

    this.timeout = null

    emitter.on('notification', (msg) => {
      this.onShow(msg)
    })

    this.onShow = this.onShow.bind(this)
    this.showNotification = this.showNotification.bind(this)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  onShow (msg) {
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.setState({ top: -100 }, () => {
        this.timeout = setTimeout(() => {
          this.showNotification(msg)
        }, 500)
      })
    } else {
      this.showNotification(msg)
    }
  }

  showNotification (msg) {
    this.setState({
      top: 16,
      msg
    }, () => {
      this.timeout = setTimeout(() => {
        this.setState({ top: -100 })
      }, 5000)
    })
  }

  render () {
    return (
      <div>
        <NotificationDiv top={this.state.top}>
          <FontAwesomeIcon icon={faBell} style={{ marginRight: '1rem' }} />
          {this.state.msg}
        </NotificationDiv>
      </div>
    )
  }
}

export default Notification
