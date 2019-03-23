import React from 'react';

class Users extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        var users = [];
        Object.keys(this.props.users).forEach(key => {
            users.push(<div key={key} className="users">{key}</div>)
        });
        return(
            <div className="users">
                { users }
            </div>
        )
    }
};

export default Users;