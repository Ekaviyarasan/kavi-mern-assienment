import React from 'react'
import UsersContainer from './components/UserContainer'
import ProductContainer from './components/ProductContainer'
import StudentContainer from './components/StudentContainer'
import DeveloperContainer from './components/DeveloperContainer'
import EmployeeContainer from './components/EmployeeContainer'
import Service from './components/Service'
import Ipl from './components/Ipl'

const App = () => {
  return (
    <>
    <UsersContainer/>
    <ProductContainer/>
    <StudentContainer/>
    <DeveloperContainer/>
  <EmployeeContainer/>
  <Service/>
  <Ipl/>
    </>
  )
}

export default App