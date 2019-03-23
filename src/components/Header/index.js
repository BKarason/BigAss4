import React from 'react';
import { connect } from 'react-redux';

const Header = ({user}) => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">User Name = { user }</nav>
};

const mapStateToProps = ({ user }) => {
    return {
        user
    };
};

export default connect(mapStateToProps)(Header);