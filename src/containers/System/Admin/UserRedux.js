import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";
import './UserRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();

        // this.props.dispatch(actions.fetchGenderStart()); Cách 2

        // call APIs trực tiếp
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
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
    }

    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl
            })
        }
    }

    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }

    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;

        return (
            <div className="user-redux-container" >
                <div className="title">Learn React-Redux</div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-2"><FormattedMessage id="manage-user.add" /> </div>
                            <div className="col-12">{isLoadingGender ? 'Loading genders' : ''}</div>
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
                                    {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
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
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.role" /></label>
                                <select className="form-control">
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
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
                                <label className="mb-0 mt-2"><FormattedMessage id="manage-user.image" /></label>
                                <div className="preview-img-container">
                                    <input type="file" id="previewImg" hidden
                                        onChange={(event) => this.handleOnChangeImage(event)}
                                    />
                                    <label htmlFor="previewImg" className="label-upload">
                                        Tải ảnh
                                        <i className="fas fa-upload"></i>
                                    </label>
                                    <div className="preview-image"
                                        onClick={() => this.openPreviewImage()}
                                        style={{ background: `url(${this.state.previewImgURL}) no-repeat center center/cover` }}
                                    />
                                </div>
                            </div>
                            <div className="col-3 mt-3">
                                <button className="btn btn-primary"><FormattedMessage id="manage-user.save" /></button>
                            </div>
                        </div>

                    </div>
                    {this.state.isOpen === true &&
                        <Lightbox
                            mainSrc={this.state.previewImgURL}

                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    }
                </div>


            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoadingGender: state.admin.isLoadingGender,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),


        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
