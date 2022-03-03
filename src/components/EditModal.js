import React, { Component } from 'react'
import { connect } from 'react-redux'
import { update_user_action } from '../Redux/ReduxActionsList/reudxActions'
import { update_user } from '../Redux/ReduxActionType/reduxActionTypeList'

class EditModal extends Component {

    state = {
        userState: {
        }
    }
    render() {
        console.log(this.state.userState)
        return (

            <React.Fragment>
                <div>
                    <div className="modal fade" id="editUser" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Editing</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-holder">
                                        <div className="">
                                            <div className="form-items">
                                                <form className="requires-validation" noValidate>
                                                    <div className="col-md-12">
                                                        <input className="form-control" type="text" name="userName" placeholder="Username" value={this.state.userState.userName} required onChange={(e) => {
                                                            this.setState({
                                                                ...this.state,
                                                                userState: { ...this.state.userState, userName: e.target.value }

                                                            }, () => {
                                                                console.log("after changename", this.state);
                                                            })
                                                        }} />
                                                        <div className="valid-feedback">Username field is valid!</div>
                                                        <div className="invalid-feedback">Username field cannot be blank!</div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control" type="email" name="email" placeholder="E-mail Address" value={this.state.userState.email} required onChange={(e) => {
                                                            this.setState({
                                                                ...this.state,
                                                                userState: { ...this.state.userState, email: e.target.value }
                                                            })
                                                        }} />
                                                        <div className="valid-feedback">Email field is valid!</div>
                                                        <div className="invalid-feedback">Email field cannot be blank!</div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control" type="password" name="password" placeholder="Password" value={this.state.userState.password} required onChange={(e) => {
                                                            this.setState({
                                                                ...this.state,
                                                                userState: { ...this.state.userState, password: e.target.value }
                                                            })
                                                        }} />
                                                        <div className="valid-feedback">Password field is valid!</div>
                                                        <div className="invalid-feedback">Password field cannot be blank!</div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control" type="text" name="fullName" placeholder="Full Name" value={this.state.userState.fullName} required onChange={(e) => {
                                                            this.setState({
                                                                ...this.state,
                                                                userState: { ...this.state.userState, fullName: e.target.value }
                                                            })
                                                        }} />
                                                        <div className="valid-feedback">Full name field is valid!</div>
                                                        <div className="invalid-feedback">Full name field cannot be blank!</div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control" type="text" name="phoneNo" placeholder="Phone Number" value={this.state.userState.phoneNo} required onChange={(e) => {
                                                            this.setState({
                                                                ...this.state,
                                                                userState: { ...this.state.userState, phoneNo: e.target.value }
                                                            })
                                                        }} />
                                                        <div className="valid-feedback">Full name field is valid!</div>
                                                        <div className="invalid-feedback">Full name field cannot be blank!</div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <select className="form-select mt-3" value={this.state.userState.role} required onChange={(e) => {
                                                            this.setState({
                                                                ...this.state,
                                                                userState: { ...this.state.userState, role: e.target.value }
                                                            })
                                                        }}>
                                                            <option selected disabled >Position</option>
                                                            <option value="Hokage">Hokage</option>
                                                            <option value="Jonin">Jonin - Special Jonin</option>
                                                            <option value="Chunin">Chunin</option>
                                                            <option value="Genin">Genin</option>
                                                        </select>

                                                        <div className="valid-feedback">You selected a position!</div>
                                                        <div className="invalid-feedback">Please select a position!</div>
                                                    </div>
                                                    <div></div>

                                                </form>
                                                <div className="modal-footer form-button mt-3">
                                                    <button id="submit" className="btn btn-primary"  data-dismiss="modal" onClick={this.props.onUpdateUser.bind(this,this.state.userState)}>Save Change</button>
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log({ prevProps, prevState })
        if (this.props.user.id !== prevState.userState.id) {
            console.log("propsUser", this.props.user)
            this.setState({
                userState: this.props.user
            }, () => {
                console.log("update")
            })

        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.appStateReducer.editUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateUser: (newUpdate) => {
            let action = update_user_action(newUpdate);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditModal);
