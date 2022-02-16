import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class MedicalFacility extends Component {

    render() {
        return (
            <div className="section section-medical-facility">
                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-header-title">Cơ sở y tế nổi bật</h2>
                        <button className="section-header-more">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="customize-border">
                                <div href="#" className="section-body-item">
                                    <div className="section-item-img section-medical-facility"></div>
                                    <h3 className="section-body-title">Hệ thông thu cúc 1</h3>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div href="#" className="section-body-item">
                                    <div className="section-item-img section-medical-facility"></div>
                                    <h3 className="section-body-title">Hệ thông thu cúc 1</h3>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div href="#" className="section-body-item">
                                    <div className="section-item-img section-medical-facility"></div>
                                    <h3 className="section-body-title">Hệ thông thu cúc 1</h3>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div href="#" className="section-body-item">
                                    <div className="section-item-img section-medical-facility"></div>
                                    <h3 className="section-body-title">Hệ thông thu cúc 1</h3>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div href="#" className="section-body-item">
                                    <div className="section-item-img section-medical-facility"></div>
                                    <h3 className="section-body-title">Hệ thông thu cúc 1</h3>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div href="#" className="section-body-item">
                                    <div className="section-item-img section-medical-facility"></div>
                                    <h3 className="section-body-title">Hệ thông thu cúc 1</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
