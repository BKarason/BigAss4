import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';

class PrivateChat extends React.Component{
    componentDidMount() {
        socket.on('recv_privatemsg', (username, message) => {
            this.setState({messages: messages.push(message), sender: username });
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
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

    }
    render() {
        return (
            <>
                <div className="chat-window" id="prvtmsg">
                    <h3 className="text-center header">Private messages:</h3>
                    <div className="input-container">
                        <input type="text" placeholder="Type your message..." value={ sendmessage } name="sendmessage" onChange={e => this.onInput(e)}/>
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
export default connect(mapStateToProps)(PrivateChat);