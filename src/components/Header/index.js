import React from 'react';
import { connect } from 'react-redux';

const Header = ({name}) => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">User Name = { name }</nav>
};

const mapStateToProps = ({ name }) => {
    return {
        name
    };
};

export default connect(mapStateToProps)(Header);