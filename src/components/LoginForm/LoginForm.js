import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/userActions';
import { socket } from '../../services/socketService';
import PropTypes from 'prop-types';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
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
        socket.emit("adduser", name, available => {
            if (available && name !== ''){
                this.props.history.push('/lobby');
            }
            else{
                alert("Username already taken!")
            }
        });
    }
    render() {
        const { name } = this.state;
        return (
            <div className="text-center" style={{marginTop: 40 }}>
                <h1 className="welcome">Welcome to Chat.io!</h1>
                <p>Enter A Username</p>
                <form action="" onSubmit={e => this.onSubmit(e)} className="form-horizontal">
                    <div className="form-goup">
                    <input type="text" name="name" id="name" value={ name } onChange={e => this.onInput(e)} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Log in!" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
};

LoginForm.propTypes = {
    addUser: PropTypes.func.isRequired
};

export default connect(null, { addUser })(LoginForm);