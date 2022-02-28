import React, { Component } from 'react'

export default class RegisterForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="form-body">
                        <div className="form-holder">
                            <div className="form-content">
                                <div className="form-items">z
                                    <h3>Register Form</h3>
                                    <p>Fill in the data below.</p>
                                    <form className="requires-validation" noValidate>
                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="userName" placeholder="Username" required />
                                            <div className="valid-feedback">Username field is valid!</div>
                                            <div className="invalid-feedback">Username field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                                            <div className="valid-feedback">Email field is valid!</div>
                                            <div className="invalid-feedback">Email field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="password" name="password" placeholder="Password" required />
                                            <div className="valid-feedback">Password field is valid!</div>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="fullName" placeholder="Full Name" required />
                                            <div className="valid-feedback">Full name field is valid!</div>
                                            <div className="invalid-feedback">Full name field cannot be blank!</div>
                                        </div>
                                     
                                        <div className="col-md-12">
                                            <select className="form-select mt-3" required>
                                                <option selected disabled value>Position</option>
                                                <option value="hokaghe">Hokage</option>
                                                <option value="jonin">Jonin - Special Jonin</option>
                                                <option value="chunin">Chunin</option>
                                                <option value="genin">Genin</option>
                                            </select>
                                            <div className="valid-feedback">You selected a position!</div>
                                            <div className="invalid-feedback">Please select a position!</div>
                                        </div>
                                        <div className="form-button mt-3">
                                            <button id="submit" type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    
                </div>


            </React.Fragment>
        )
    }
}
