import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from "../../services/userService"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }

    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                // to do
                this.props.userLoginSuccess(data.user)
                console.log('login suceeds');
            }


        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })

                }
            }
            console.log(error.response);
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {

        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <h2 className='col-12 text-login'>Login</h2>
                        <div className="col-12 form-group login-input">
                            <label htmlFor="user-name">Username</label>
                            <input type="text" id="username" className="form-control" placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnchangeUsername(event)} />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label htmlFor="password">Password</label>
                            <div className="custom-input-password">
                                <input type={this.state.isShowPassword ? 'text' : 'password'} id="password" className="form-control" placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnchangePassword(event)}
                                />
                                <span onClick={() => this.handleShowHidePassword()}>
                                    <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>

                            </div>
                        </div>
                        <div className="col-12" style={{ color: "red" }}>
                            {this.state.errMessage}
                        </div>
                        <div className="col-12 btn-login-wrapper">
                            <button className="btn-login" onClick={() => this.handleLogin()}>Login</button>
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
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
