import ReactDOM from 'react-dom'
import isDOM from 'is-dom'
import React from 'react'

export default class ElementContainer extends React.Component {
  render () {
    return (
      <div style={{position: 'absolute', height: '100%', display: 'inline-flex', width: '100%'}} ref='container'/>
    )
  }

  shouldComponentUpdate (nextProps) {
    return this.props.element !== nextProps.element
  }

  componentDidUpdate (prevProps) {
    this.updateElement(prevProps)
  }

  componentDidMount () {
    this.updateElement({})
  }

  updateElement (prevProps) {
    const wrap = ReactDOM.findDOMNode(this.refs.container)
    const next = this.props.element
    const prev = prevProps.element

    if (next) {
      wrap.appendChild(next)
    }

    if (prev && prev !== next && prev.parentNode === wrap) {
      wrap.removeChild(prev)
    }
  }
}

ElementContainer.propTypes = {
  child: isDOM
}