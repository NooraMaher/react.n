import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.css'
import './login.css'

class Login extends Component {
    state = {}
    render() {
        return (

            <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
                <div className='Login'>
                    <h2 className="mb-3"> Login</h2>
                    <form>
                        <div className='form-group mb-2'>
                            <label htmlFor='email' className="form-label1">Email Address</label>
                            <input type='email' className="form-control"></input>

                        </div>

                        <div className='form-group mb-2'>
                            <label htmlFor='password' className="form-label1">password</label>
                            <input type='password' className="form-control"></input>

                        </div>
                        <div className='form-group form-check mb-2'>
                            <input type='checkbox' className="form-check-input"></input>
                            <label htmlFor='check' className="form-check-label">Remember me</label>

                        </div>
                        <button type='submit' className='btn btn-success block w-100 mt-2'>SIGN IN</button>
                    </form>
                </div>
            </div>
        );
    }


}


export default Login;