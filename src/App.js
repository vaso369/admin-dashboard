import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import ChooseTheme from './pages/ChooseTheme/ChooseTheme'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Login} />
        <Route exact path="/theme" component={ChooseTheme} />

      </Switch>
    </>
  )
}

export default App
