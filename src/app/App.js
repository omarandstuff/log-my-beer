import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import Layout from './components/layouts/MainLayout'

import Index    from './components/beers/Index'
import New      from './components/beers/New'
import NotFound from './components/beers/NotFound'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path='/' component={ Index } />
              <Route exact path='/log_my_beer' component={ New } />
              <Route component={ NotFound } />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    )
  }
}
