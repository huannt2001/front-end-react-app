import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        let language = this.props.language;
        return (
            <div className="home-header">
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <button className="header-bars">
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="header-logo"></div>
                        </div>
                        <ul className="list-options-content">
                            <li className="list-options-item" >
                                <a className="sub-header">
                                    <FormattedMessage id="homeheader.specialty" />
                                </a>
                                <p className="sub-title">
                                    <FormattedMessage id="homeheader.searchdoctor" />
                                </p>
                            </li>
                            <li className="list-options-item" >
                                <a className="sub-header">
                                    <FormattedMessage id="homeheader.health-facility" />
                                </a>
                                <p className="sub-title">
                                    <FormattedMessage id="homeheader.select-room" />
                                </p>
                            </li>
                            <li className="list-options-item" >
                                <a className="sub-header" >
                                    <FormattedMessage id="homeheader.doctor" />
                                </a>
                                <p className="sub-title">
                                    <FormattedMessage id="homeheader.select-doctor" />
                                </p>
                            </li>
                            <li className="list-options-item" >
                                <a className="sub-header">
                                    <FormattedMessage id="homeheader.fee" />
                                </a>
                                <p className="sub-title">
                                    <FormattedMessage id="homeheader.check-heath" />
                                </p>
                            </li>
                        </ul>
                        <div className="right-content">
                            <a className="header-support">
                                <span className="support-icon">
                                    <i className="fas fa-question-circle"></i>
                                </span>
                                <span>
                                    <FormattedMessage id="homeheader.support" />
                                </span>
                            </a>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
                            </div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-header-banner">
                    <div className="search">
                        <div className="search-container">
                            <h1 className="search-title">
                                <FormattedMessage id="banner.title1" />
                                <br />
                                <b><FormattedMessage id="banner.title2" /></b>
                            </h1>
                            <div className="search-input-wrap">
                                <div className="search-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <input type="text" className="search-input" placeholder="Tìm bác sĩ" />
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="option-container">
                            <ul className="option-list">
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-hospital"> </i>
                                        </div>
                                        <p className="option-title">
                                            <FormattedMessage id="banner.check-specialty" />
                                        </p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-mobile-alt"> </i>
                                        </div>
                                        <p className="option-title">
                                            <FormattedMessage id="banner.remote-examination" />
                                        </p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-procedures"> </i>
                                        </div>
                                        <p className="option-title">
                                            <FormattedMessage id="banner.general-examination" />
                                        </p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-flask"> </i>
                                        </div>
                                        <p className="option-title">
                                            <FormattedMessage id="banner.medical-test" />
                                        </p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-user-md"> </i>
                                        </div>
                                        <p className="option-title">
                                            <FormattedMessage id="banner.mental-health" />
                                        </p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-hospital"> </i>
                                        </div>
                                        <p className="option-title">
                                            <FormattedMessage id="banner.dental-examination" />
                                        </p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className="fa fa-scissors"></i>
                                        </div>
                                        <p className="option-title">
                                            <FormattedMessage id="banner.surgical-packet" />
                                        </p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className="fa fa-truck"></i>
                                        </div>
                                        <p className="option-title">
                                            <FormattedMessage id="banner.medical-product" />
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
