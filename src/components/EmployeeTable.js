import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delete_user_action, edit_user_action } from '../Redux/ReduxActionsList/reudxActions'
import EditModal from './EditModal'
class EmployeeTable extends Component {

    renderTable = () => {
        return this.props.userList.map((user, index) => {
            return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.fullName}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
                <td>{user.role}</td>
                <td className='text-center'>
                    <button className='btn btn-success mr-2' data-toggle="modal" data-target="#editUser" onClick={this.props.onEditUser.bind(this,user)}>Edit</button>
                    <button className='btn btn-danger' onClick={this.props.onDeleteUser.bind(this,user)}>Delete</button>
                </td>
            </tr>
        })
    }
    render() {
       // console.log(this.props.userList)
        return (
            <React.Fragment>
                <div className="container-fluid pb-4">
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
                <EditModal></EditModal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.appStateReducer.userList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteUser: (user) => {
            let action = delete_user_action(user);
            dispatch(action);
        },
        onEditUser: (user)=>{
            let action = edit_user_action(user);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable)