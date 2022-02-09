import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <h2 className='col-12 text-login'>Login</h2>
                        <div className="col-12 form-group login-input">
                            <label htmlFor="user-name">Username</label>
                            <input type="text" id="username" className="form-control" placeholder='Enter your username' />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" placeholder='Enter your password' />
                        </div>
                        <div className="col-12 btn-login-wrapper">
                            <button className="btn-login">Login</button>
                        </div>
                        <div className="col-12 forgot-password">
                            <span>Forgot your password?</span>
                        </div>
                        <div className="col-12 login-other">
                            Or Login with:
                        </div>
                        <div className="col-12 socials-login">
                            <i className="fab fa-google-plus-g social-icon-google"></i>
                            <i className="fab fa-facebook-f social-icon-facebook"></i>
                        </div>


                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
