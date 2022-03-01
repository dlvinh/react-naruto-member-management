import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditModal extends Component {
    render() {
        console.log(this.props.user)
        return (
            <React.Fragment>
                <div>
                    <div className="modal fade" id="editUser" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-holder">
                                        <div className="form-content">
                                            <div className="form-items">
                                                <h3>Register Form</h3>
                                                <p>Fill in the data below.</p>
                                                <form className="requires-validation" noValidate>
                                                    <div className="col-md-12">
                                                        <input className="form-control" type="text" name="userName" placeholder="Username" required onChange={(e) => {
                                                            this.setState({
                                                                ...this.state,
                                                                userName: e.target.value
                                                            })
                                                        }} />
                                                        <div className="valid-feedback">Username field is valid!</div>
                                                        <div className="invalid-feedback">Username field cannot be blank!</div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control" type="email" name="email" placeholder="E-mail Address" required onChange={(e) => {
                                                            this.setState({
                                                                ...this.state,
                                                                email: e.target.value
                                                            })
                                                        }} />
                                                        <div className="valid-feedback">Email field is valid!</div>
                                                        <div className="invalid-feedback">Email field cannot be blank!</div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control" type="password" name="password" placeholder="Password" required onChange={(e) => {
                                                            this.setState({
                                                                ...this.state,
                                                                password: e.target.value
                                                            })
                                                        }} />
                                                        <div className="valid-feedback">Password field is valid!</div>
                                                        <div className="invalid-feedback">Password field cannot be blank!</div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control" type="text" name="fullName" placeholder="Full Name" required onChange={(e) => {
                                                            this.setState({
                                                                ...this.setState,
                                                                fullName: e.target.value
                                                            })
                                                        }} />
                                                        <div className="valid-feedback">Full name field is valid!</div>
                                                        <div className="invalid-feedback">Full name field cannot be blank!</div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control" type="text" name="phoneNo" placeholder="Phone Number" required onChange={(e) => {
                                                            this.setState({
                                                                ...this.setState,
                                                                phoneNo: e.target.value
                                                            })
                                                        }} />
                                                        <div className="valid-feedback">Full name field is valid!</div>
                                                        <div className="invalid-feedback">Full name field cannot be blank!</div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <select className="form-select mt-3" required onChange={(e) => {
                                                            this.setState({
                                                                ...this.setState,
                                                                role: e.target.value
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
                                                    <div className="form-button mt-3">
                                                        <button id="submit" type="submit" className="btn btn-primary">Register</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.appStateReducer.editUser,
    }

}

export default connect(mapStateToProps)(EditModal);
