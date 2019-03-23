import React from 'react';
import { connect } from 'react-redux';


class Header extends React.Component {
    componentDidMount() {

    }

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">User Name = {this.props.user.user} </nav>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    };
};

export default connect(mapStateToProps)(Header);