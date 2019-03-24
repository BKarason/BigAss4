import React from 'react';
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
        navbar = <nav className="navbar navbar-expand-lg navbar-dark bg-primary">User Name = {this.props.user.user} ég er ekki op</nav>
        Object.keys(this.props.ops).forEach(key => {
            if(this.props.ops[key] == this.props.user.user){
                navbar = <nav className="navbar navbar-expand-lg navbar-dark bg-primary">User Name = {this.props.user.user} ég er op biiiiitch</nav>
            }
        });
        /// { navbar } í divi fyrir neðan síðan bara
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