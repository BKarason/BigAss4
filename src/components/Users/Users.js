import React from 'react';

class Users extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        var users = [];
        Object.keys(this.props.users).forEach(key => {
            users.push(<div key={key}></div>)
        });
        return(
            <div>
                { users }
            </div>
        )
    }
};

export default Users;