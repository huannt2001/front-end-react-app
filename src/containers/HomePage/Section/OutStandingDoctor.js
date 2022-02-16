import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class OutStandingDoctor extends Component {

    render() {
        return (
            <div className="section section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-header-title">Bác sĩ nổi bật tuần qua</h2>
                        <button className="section-header-more">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="customize-border">
                                <div className="section-body-item text-center">
                                    <div className="section-item-img section-outstanding-doctor"></div>
                                    <h3 className="section-body-title">Giáo sư, Tiến sĩ NTH</h3>
                                    <p className="doctor-specialty">Cơ xương khớp</p>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div className="section-body-item text-center">
                                    <div className="section-item-img section-outstanding-doctor"></div>
                                    <h3 className="section-body-title">Giáo sư, Tiến sĩ NTH</h3>
                                    <p className="doctor-specialty">Cơ xương khớp</p>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div className="section-body-item text-center">
                                    <div className="section-item-img section-outstanding-doctor"></div>
                                    <h3 className="section-body-title">Giáo sư, Tiến sĩ NTH</h3>
                                    <p className="doctor-specialty">Cơ xương khớp</p>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div className="section-body-item text-center">
                                    <div className="section-item-img section-outstanding-doctor"></div>
                                    <h3 className="section-body-title">Giáo sư, Tiến sĩ NTH</h3>
                                    <p className="doctor-specialty">Cơ xương khớp</p>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div className="section-body-item text-center">
                                    <div className="section-item-img section-outstanding-doctor"></div>
                                    <h3 className="section-body-title">Giáo sư, Tiến sĩ NTH</h3>
                                    <p className="doctor-specialty">Cơ xương khớp</p>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div className="section-body-item text-center">
                                    <div className="section-item-img section-outstanding-doctor"></div>
                                    <h3 className="section-body-title">Giáo sư, Tiến sĩ NTH</h3>
                                    <p className="doctor-specialty">Cơ xương khớp</p>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div className="section-body-item text-center">
                                    <div className="section-item-img section-outstanding-doctor"></div>
                                    <h3 className="section-body-title">Giáo sư, Tiến sĩ NTH</h3>
                                    <p className="doctor-specialty">Cơ xương khớp</p>
                                </div>
                            </div>

                        </Slider>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
