import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';


class HomeHeader extends Component {

    render() {
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
                                <a className="sub-header">Chuyên Khoa</a>
                                <p className="sub-title">Tìm bác sĩ theo chuyên khoa</p>
                            </li>
                            <li className="list-options-item" >
                                <a className="sub-header">Cơ sở y tế</a>
                                <p className="sub-title">Chọn bệnh viện, phòng khám</p>
                            </li>
                            <li className="list-options-item" >
                                <a >Bác sĩ</a>
                                <p>Chọn bác sĩ giỏi</p>
                            </li>
                            <li className="list-options-item" >
                                <a className="sub-header">Gói khám</a>
                                <p className="sub-title">Khám sức khỏe tổng quát</p>
                            </li>
                        </ul>
                        <div className="right-content">
                            <a className="header-support">
                                <span className="support-icon">
                                    <i className="fas fa-question-circle"></i>
                                </span>
                                <span>Hỗ trợ</span>
                            </a>
                            <div className="flag">VN</div>
                        </div>
                    </div>
                </div>

                <div className="home-header-banner">
                    <div className="search">
                        <div className="search-container">
                            <h1 className="search-title">NỀN TẢNG Y TẾ
                                <br />
                                <b>
                                    CHĂM SÓC SỨC KHỎE TOÀN DIỆN
                                </b>
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
                                        <p className="option-title">Khám Chuyên Khoa</p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-mobile-alt"> </i>
                                        </div>
                                        <p className="option-title">Khám Chuyên Khoa</p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-procedures"> </i>
                                        </div>
                                        <p className="option-title">Khám Chuyên Khoa</p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-microscope"> </i>
                                        </div>
                                        <p className="option-title">Khám Chuyên Khoa</p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-tooth"> </i>
                                        </div>
                                        <p className="option-title">Khám Chuyên Khoa</p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-hospital"> </i>
                                        </div>
                                        <p className="option-title">Khám Chuyên Khoa</p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-hospital"> </i>
                                        </div>
                                        <p className="option-title">Khám Chuyên Khoa</p>
                                    </a>
                                </li>
                                <li className="option-item">
                                    <a className="option-item-link">
                                        <div className="option-service">
                                            <i className=" fas fa-hospital"> </i>
                                        </div>
                                        <p className="option-title">Khám Chuyên Khoa</p>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
