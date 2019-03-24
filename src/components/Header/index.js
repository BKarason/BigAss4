import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import { connect } from 'react-redux';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ops: [],
            op: false
        }
    }

    updateBool(){
        this.setState({op: true});
    }

    render(){
        let navbar;
        navbar = <nav className="navbar navbar-expand-lg navbar-dark bg-light"><NavLinks/>User Name = {this.props.user.user}</nav>
        Object.keys(this.props.ops).forEach(key => {
            if(this.props.ops[key] == this.props.user.user){
                navbar = <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <NavLinks/>User Name = {this.props.user.user} ég er op biiiiitch</nav>
            }
        });
        return(
                <>
                    { navbar }
                </>
            );
    }
}

const mapStateToProps = ({ user, room }) => {
    return {
        user,
        room
    };
};

export default connect(mapStateToProps)(Header);