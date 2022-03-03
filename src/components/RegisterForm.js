import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_user_action, delete_user_action } from '../Redux/ReduxActionsList/reudxActions';
import Swal from 'sweetalert2'

// CommonJS


class RegisterForm extends Component {
    state = {
        user: {
            userName: "",
            email: "",
            password: "",
            fullName: "",
            phoneNo: "",
            role: "",
        },
        error: {
            userName: "",
            email: "",
            password: "",
            fullName: "",
            phoneNo: "",
            role: "",
        },
        valid: true
    }

    inputValidationHandler = (e) => {
        let { name, value } = e.target;
        let newError = { ...this.state.error };
        let newValue = { ...this.state.user };
        // BLANK validation
        if (value.trim() === "") {
            newError[name] = `${name} can not be blank` // this will return {name: value, va cai gia tri con lai tu this.state.error}
            //console.log(newError) check to see what newError looks like
        } else {
            newError[name] = "";
        }

        // EMAIL VALIDATION
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (name === 'email') {
            if (!emailRegex.test(value)) {
                newError[name] = `${name} is invalid`;
            } else {
                newError[name] = "";
            }
        }




        newValue[name] = value;
        this.setState({
            ...this.state,
            error: newError,
            user: newValue
        }, () => {
            console.log(this.state)
        })
        /**
         * Ta co the viet theo kieu nay nhung this.setState se repeat nhieu lan
         * nen dat error = {...this.state.error}
         *  console.log({name,value})
          if (value.trim() === ""){
              console.log("blank")
              this.setState({
                  ...this.state,
                  error: {...this.state.error, [name]: `${name} can not be blank`}
              },()=>{
                  console.log(this.state.error)
              })
          }else{
              this.setState({
                  ...this.state,
                  error: {...this.state.error, [name]: ""}
              })
          }
         *  */


        // this.setState({
        //     ...this.state,
        //     user: {...this.state.user, [name]:[value]},
        // })
    }

    render() {
        return (
            <React.Fragment>
                <div className="form-body" onSubmit={(e) => {

                    e.preventDefault();
                    let valid = true;
                    for (const [key, value] of Object.entries(this.state.user)) {
                        if (value === "") {
                            valid = false;
                        }
                    }
                    for (const [key, value] of Object.entries(this.state.error)) {
                        console.log([key, value])
                        if (value !== "") {
                            valid = false;
                        }
                    }
                    console.log("newSubmitHandler", valid);
                    if (valid === false) {
                        Swal.fire({
                            title: 'Invalid!',
                            text: 'Please fill the form properly',
                            icon: 'error',
                            confirmButtonText: 'Next'
                        })

                    } else {
                        Swal.fire({
                            title: 'SUCCESS!',
                            text: 'Register Success',
                            icon: 'success',
                            confirmButtonText: 'Next'
                        })
                        this.props.onAddNewUser(this.state.user)
                    }
                }
                }>
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Register Form</h3>
                            <p>Fill in the data below.</p>
                            <form className="requires-validation" noValidate>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="userName" placeholder="Username" required onChange={this.inputValidationHandler} />
                                    <div className="valid-feedback">Username field is valid!</div>
                                    <div className="invalid-feedback" style={{ display: this.state.error.userName === "" ? "none" : "block" }}>{this.state.error.userName}</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="email" name="email" placeholder="E-mail Address" required onChange={this.inputValidationHandler} />
                                    <div className="valid-feedback">Email field is valid!</div>
                                    <div className="invalid-feedback" style={{ display: this.state.error.email === "" ? "none" : "block" }}>{this.state.error.email}</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="password" name="password" placeholder="Password" required onChange={this.inputValidationHandler} />
                                    <div className="valid-feedback">Password field is valid!</div>
                                    <div className="invalid-feedback" style={{ display: this.state.error.password === "" ? "none" : "block" }}>{this.state.error.password}</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="fullName" placeholder="Full Name" required onChange={this.inputValidationHandler} />
                                    <div className="valid-feedback">Full name field is valid!</div>
                                    <div className="invalid-feedback" style={{ display: this.state.error.fullName === "" ? "none" : "block" }}>{this.state.error.fullName}</div>
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="phoneNo" placeholder="Phone Number" required onChange={this.inputValidationHandler} />
                                    <div className="valid-feedback">Full name field is valid!</div>
                                    <div className="invalid-feedback" style={{ display: this.state.error.phoneNo === "" ? "none" : "block" }} >{this.state.error.phoneNo}</div>
                                </div>

                                <div className="col-md-12">
                                    <select className="form-select mt-3" name='role' required onChange={this.inputValidationHandler}>
                                        <option selected disabled >Position</option>
                                        <option value="Hokage">Hokage</option>
                                        <option value="Jonin">Jonin - Special Jonin</option>
                                        <option value="Chunin">Chunin</option>
                                        <option value="Genin">Genin</option>
                                    </select>

                                    <div className="valid-feedback">You selected a position!</div>
                                    <div className="invalid-feedback" style={{ display: this.state.error.role === "" ? "none" : "block" }}>Please select a position!</div>
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
            </React.Fragment >
        )
    }

}


const mapStateToProps = () => {

}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewUser: (newUser) => {
            let action = add_user_action(newUser);
            dispatch(action)
        }
    }
}



export default connect(null, mapDispatchToProps)(RegisterForm)
