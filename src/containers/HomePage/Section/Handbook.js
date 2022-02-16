import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class Handbook extends Component {

    render() {
        return (
            <div className="section section-hand-book">
                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-header-title">Cẩm nang</h2>
                        <button className="section-header-more">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="customize-border">
                                <div href="#" className="section-body-item">
                                    <div className="section-item-img section-hand-book"></div>
                                    <h3 className="section-body-title">2 Phương pháp Cắt bao quy đầu phổ biến hiện nay - Nên lựa chọn phương pháp nào?</h3>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div href="#" className="section-body-item">
                                    <div className="section-item-img section-hand-book"></div>
                                    <h3 className="section-body-title">2 Phương pháp Cắt bao quy đầu phổ biến hiện nay - Nên lựa chọn phương pháp nào? 1</h3>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div href="#" className="section-body-item">
                                    <div className="section-item-img section-hand-book"></div>
                                    <h3 className="section-body-title">2 Phương pháp Cắt bao quy đầu phổ biến hiện nay - Nên lựa chọn phương pháp nào?</h3>
                                </div>
                            </div>
                            <div className="customize-border">
                                <div href="#" className="section-body-item">
                                    <div className="section-item-img section-hand-book"></div>
                                    <h3 className="section-body-title">2 Phương pháp Cắt bao quy đầu phổ biến hiện nay - Nên lựa chọn phương pháp nào? 1</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
