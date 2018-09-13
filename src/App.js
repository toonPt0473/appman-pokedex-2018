import React, { Component } from 'react'
import styled from 'styled-components'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Pokedex from './containers/Pokedex/index';

import './App.css'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
`

class App extends Component {
  render() {
    return (
      <Container id="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Pokedex} />
          </Switch>
        </BrowserRouter>
      </Container>
    )
  }
}

export default App
