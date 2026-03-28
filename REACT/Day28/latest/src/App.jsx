import React from 'react'
import Dashboard from './compont/Dashboard'
import Form from './compont/Form'
import Login from './compont/Login'
import WithAlert from './Hoc/withAlert'
import WithAuth from './Hoc/withAuth'
import WithDisable from './Hoc/withDisable'
import WithLogger from './Hoc/withLogger'
import WithTitle from './Hoc/withTitle'

function App() {
  return (
    <>
    <Dashboard/>
    <Form/>
    <Login/>
    <WithAlert/>
    <WithAuth/>
    <WithDisable/>
    <WithLogger/>
    <WithTitle/>
    </>
  )
}

export default App