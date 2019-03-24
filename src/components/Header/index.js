import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { socket } from '../../services/socketService';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allUsers: []
        };
    }
    deOp(e) {
        e.preventDefault();
        console.log(e.target.name);
        socket.emit('deop', { user: e.target.name, room: this.props.room.room}, success => {
            if(success){
                console.log("yay");
            } else {
                console.log("nay");
            }
        });
    }
    op(e) {
        e.preventDefault();
        console.log(e.target.name);
        socket.emit('op', { user: e.target.name, room: this.props.room.room}, success => {
            if(success){
                console.log("yay");
            } else {
                console.log("nay");
            }
        });
    }
    kick(e) {
        e.preventDefault();
        console.log(e.target.name);
        socket.emit('kick', { user: e.target.name, room: this.props.room.room}, success => {
            if(success){
                console.log("yay");
            } else {
                console.log("nay");
            }
        });
    }
    ban(e) {
        e.preventDefault();
        const name = e.target.name;
        socket.emit('ban', { user: e.target.name, room: this.props.room.room}, success => {
            if(success) {
                alert(name + " was banned.");
            } else {
                console.log("nay");
            }
        });
    }
    updateUserList(e) {
        e.preventDefault();
        socket.emit('users');
        socket.on('userlist', userlist => {
            this.setState({allUsers: userlist});
        });
    }
    render(){
        let navbar;
        navbar = <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <NavLinks/>
                Logged in as: {this.props.user.user}
            </nav>
        var ops = [];
        var users = [];
        var kickable = [];
        var banList = [];
        Object.keys(this.props.ops.ops).forEach(key => {
            ops.push(<a key={key} name={key} onClick={e => this.deOp(e)}>{key}</a>)
            kickable.push(<a key={key} name={key} onClick={e => this.kick(e)}>{key}</a>)
        });
        
        Object.keys(this.props.users.users).forEach(key => {
            users.push(<a key={key} name={key} onClick={e => this.op(e)}>{key}</a>)
            kickable.push(<a key={key} name={key} onClick={e => this.kick(e)}>{key}</a>)
        });
        this.state.allUsers.map((name) => banList.push(<a key={name} name={name} onClick={e => this.ban(e)}>{name}</a>))
        Object.keys(this.props.ops.ops).forEach(key => {
            if(this.props.ops.ops[key] == this.props.user.user){
                navbar = <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                    <NavLinks/>
                    <div className="dropdown ">
                        <button className="dropbtn">De-op</button>
                        <div className="dropdown-content">
                            { ops }
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Op</button>
                        <div className="dropdown-content">
                            { users }
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">kick</button>
                        <div className="dropdown-content">
                            { kickable }
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn" onMouseOver={e => this.updateUserList(e)}>ban</button>
                        <div className="dropdown-content">
                            { banList }
                        </div>
                    </div>
                    OP   - Logged in as: {this.props.user.user}
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

const mapStateToProps = ({ user, room, ops, users}) => {
    return {
        user,
        room,
        ops,
        users
    };
};
Header.propTypes = {
    user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    room: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    ops: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default connect(mapStateToProps)(Header);