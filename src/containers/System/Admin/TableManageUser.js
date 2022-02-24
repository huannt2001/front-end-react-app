import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions";

class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                userRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user.id)
    }

    handleEditUser = (user) => {
        this.props.handleEditUserFromParent(user);
    }

    render() {
        console.log('>>chek list users ', this.props.listUsers);
        console.log('>>chek state ', this.state);
        let arrUsers = this.state.userRedux;
        return (
            <table id="customers">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {arrUsers && arrUsers.length > 0 &&
                        arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn-edit"
                                            onClick={() => this.handleEditUser(item)}
                                        >
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button className="btn-delete"
                                            onClick={() => this.handleDeleteUser(item)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
