import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions"

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        // this.props.dispatch(actions.getGenderStart()); Cách 2

        // try {
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //render => didUpdate
        // hiện tại (this) và quá khứ (previous)
        // [] vs [3]
        console.log('check prevProps', prevProps)
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
    }

    render() {
        let genders = this.state.genderArr;
        let language = this.props.language;
        console.log('check props from redux', this.props.genderRedux);
        return (
            <div className="user-redux-container" >
                <div className="title">Learn React-Redux</div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-2"><FormattedMessage id="manage-user.add" /> </div>
                            <div className="col-3">
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.email" /></label>
                                <input className="form-control" type="email" placeholder='Email...' />
                            </div>
                            <div className="col-3">
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.password" /></label>
                                <input className="form-control" type="password" placeholder='Password...' />
                            </div>
                            <div className="col-3">
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.first-name" /></label>
                                <input className="form-control" type="text" placeholder='First name...' />
                            </div>
                            <div className="col-3">
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.last-name" /></label>
                                <input className="form-control" type="text" placeholder='Last name...' />
                            </div>
                            <div className="col-3">
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.phone-number" /></label>
                                <input className="form-control" type="text" placeholder='Phonenumber...' />
                            </div>
                            <div className="col-9">
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.address" /></label>
                                <input className="form-control" type="text" placeholder='Address...' />
                            </div>
                            <div className="col-3">
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.gender" /></label>
                                <select className="form-control">
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.position" /></label>
                                <select className="form-control">
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index}>{item.valueVi}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.role" /></label>
                                <select className="form-control">
                                    <option >Choose...</option>
                                    <option>Male</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.image" /></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 mt-3">
                                <button className="btn btn-primary"><FormattedMessage id="manage-user.save" /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
