import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router-dom'

class PrivateRoute extends Component {
  componentWillMount() {
    const { authPending, isAuthenticated } = this.props
    if(!authPending && !isAuthenticated) {
      this.props.history.push('/login')
    }
  }
  componentWillReceiveProps(nextProps) {
    const { authPending, isAuthenticated } = nextProps
    if(!authPending && !isAuthenticated) {
      nextProps.history.push('/login')
    }
  }
  render() {
    const { component: Component, ...rest } = this.props
    const { isAuthenticated, authPending } = this.props
    return (
      <Route { ...rest }
        render={ props => isAuthenticated
          ? <Component { ...props } />
          : <div />
        }
      />
    )
  }
}

PrivateRoute.propTypes = {
  authPending: PropTypes.bool,
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  history: PropTypes.object
}

const mapStateToProps = state => ({
  authPending: state.auth.authPending,
  isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps)(PrivateRoute))
