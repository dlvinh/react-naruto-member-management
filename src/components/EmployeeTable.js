import React, { Component } from 'react'
import { connect } from 'react-redux'
class EmployeeTable extends Component {

    renderTable = () => {
        return this.props.userList.map((user, index) => {
            return <tr id={index}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.fullName}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
                <td>{user.role}</td>
                <td className='text-center'><button className='btn btn-success mr-2'>Edit</button><button className='btn btn-danger'>Delete</button></td>
            </tr>
        })
    }
    render() {
        console.log(this.props.userList)
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <h3 style={{ color: "#fff" }}>Leaf Village Member</h3>
                    <table className="table EmployeeTable table-hover">

                        <thead>

                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Username</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Password</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.appStateReducer.userList
    }
}

export default connect(mapStateToProps)(EmployeeTable)