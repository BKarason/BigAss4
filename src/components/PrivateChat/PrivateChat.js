import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';
import Header from '../Header/index';
import PropTypes from 'prop-types';

class PrivateChat extends React.Component{
    componentDidMount() {
        socket.on('recv_privatemsg', (username, message) => {
            this.setState({messages: message, sender: username });
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            messages: '',
            sendmessage: "",
            recipent: "",
            sender: ""
        }
    }
    onInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    sendPrivateMessage(e){
        e.preventDefault();
        if(this.state.recipent !== '' && this.state.sendmessage !== ''){
            socket.emit('privatemsg', { nick: this.state.recipent, message: this.state.sendmessage}, success => {
                if(success){
                    console.log('Message sent');
                    this.setState({ sendmessage: '', recipent: ''});
                }
            });
        }
    }
    render() {
        //const { messages } = this.state.messages;
        return (
            <>
                <Header/>
                <div className="chat-window" id="prvtmsg">
                    <h3 className="text-center header">Private messages:</h3>
                    <div className="input-container">
                        <p> {this.state.sender } - { this.state.messages }</p>
                        <input type="text" placeholder="Type recipent..." value={ this.state.recipent } name="recipent" onChange={e => this.onInput(e)}/>
                        <input type="text" placeholder="Type your message..." value={ this.state.sendmessage } name="sendmessage" onChange={e => this.onInput(e)}/>
                        <button type="button" onClick={e => this.sendPrivateMessage(e)}>Send</button>
                    </div>
                </div>
            </>
        );
    }
};

const mapStateToProps = ({ user }) => {
    return {
        user
    };
};

PrivateChat.propTypes ={
    user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default connect(mapStateToProps)(PrivateChat);