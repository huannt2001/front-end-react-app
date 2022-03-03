import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import './ManageDoctor.scss';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser

const options = [
    { value: 'Chocolate', label: 'Chocolate' },
    { value: 'Strawberry', label: 'Strawberry' },
    { value: 'Vanilla', label: 'Vanilla' },
]

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentMardown: '',
            contentHTML: '',
            selectedOption: '',
            description: ''
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMardown: text,
            contentHTML: html
        })
    }

    handleChange = selectedOption => {
        this.setState({
            selectedOption
        })
        console.log('Option selected: ', selectedOption);
    }

    handleSaveContentMarkDown = () => {
        console.log('>>> check state: ', this.state);
    }

    handleOnChangeDesc = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    render() {
        return (
            <div className="manage-doctor-container">
                <h1 className="manage-doctor-title">Tạo thêm thông tin bác sĩ</h1>

                <div className="manage-doctor-more-info">
                    <div className="content-left">
                        <label>Chọn bác sĩ</label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <div className="content-right form-group">
                        <label htmlFor="info">Thông tin giới thiệu bác sĩ:</label>
                        <textarea className="form-control" rows="4" id="info"
                            onChange={(e) => this.handleOnChangeDesc(e)}
                            value={this.state.description}
                        >
                        </textarea>
                    </div>

                </div>

                <div className="manage-doctor-editor">
                    <MdEditor style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange} />
                </div>

                <button className="manage-doctor-save btn btn-primary"
                    onClick={() => this.handleSaveContentMarkDown()}>
                    Lưu thông tin
                </button>

            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
