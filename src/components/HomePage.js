import React, { Component } from 'react'
import EmployeeTable from './EmployeeTable'
import RegisterForm from './RegisterForm'

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
          <RegisterForm></RegisterForm>
          <EmployeeTable></EmployeeTable>
      </React.Fragment> 
    )
  }
}
