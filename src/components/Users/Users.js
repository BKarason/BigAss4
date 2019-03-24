import React from 'react';
import PropTypes from 'prop-types';

class Users extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        var users = [];
        var ops = [];
        Object.keys(this.props.users).forEach(key => {
            users.push(<div key={key} className="user">{key}</div>)
        });
        Object.keys(this.props.ops).forEach(key => {
            ops.push(<div key={key} className="user">*{key}</div>)
        });
        return(
            <div className="users">
                <h3>Users:</h3>
                { ops }
                { users }
            </div>
        )
    }
};

Users.propTypes = {
    users: PropTypes.object.isRequired,
    ops: PropTypes.object.isRequired
};

export default Users;