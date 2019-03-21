import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/userActions';
import { socket } from '../../services/socketService';
import { Redirect } from 'react-router-dom';
import ChatLobby from '../ChatLobby/ChatLobby';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }
    onInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const { addUser } = this.props;
        const { name } = this.state;
        addUser(name);
        this.emitUserToServer(this.state.name);
    }
    emitUserToServer(name) {
        socket.emit("adduser", name, function(available){
            if (available){
                this.props.history.push('/lobby');
            }
        });
    }
    render() {
        const { name } = this.state;
        return (
            <div className="text-center" style={{marginTop: 40 }}>
                <p>Enter A Username</p>
                <form action="" onSubmit={e => this.onSubmit(e)} className="form-horizontal">
                    <div className="form-goup">
                    <input type="text" name="name" id="name" value={ name } onChange={e => this.onInput(e)} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Change name!" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
};

export default connect(null, { addUser })(LoginForm);