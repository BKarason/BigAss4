import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            op: false
        }
    }

    render(){
        let navbar;
        navbar = <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <NavLinks/>
                Logged in as: {this.props.user.user}
            </nav>
        Object.keys(this.props.ops.ops).forEach(key => {
            if(this.props.ops.ops[key] == this.props.user.user){
                navbar = <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                    <NavLinks/>
                    OP  -  Logged in as: {this.props.user.user}
                </nav>
            }
        });
        return(
                <>
                    { navbar }
                </>
            );
    }
}

const mapStateToProps = ({ user, room, ops }) => {
    return {
        user,
        room,
        ops
    };
};
Header.propTypes = {
    user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    room: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    ops: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default connect(mapStateToProps)(Header);