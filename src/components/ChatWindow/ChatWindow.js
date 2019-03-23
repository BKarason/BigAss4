import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';
import Users from '../Users/Users';
import Messages from '../Messages/Messages';


class ChatWindow extends React.Component{
    componentDidMount() {
        socket.on('updateusers', (room, roomUsers, roomOps) =>{
            if(room == this.props.room.room){
                this.setState({users: roomUsers, ops: roomOps});
            }
        });
        socket.on('updatechat', (room, messageHistory) => {
            if(room == this.props.room.room) {
                this.setState({messageHistory});
            }
        });
        //tengja við ákveðið room sem að notandinn er í og 
        //fá messages og users fyrir það
    }
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            ops: {},
            messageHistory: [],
            message: ""
            //og messages 
            // og curr message fyrir room'ið sem að user er í 
        }
    }
    sendMessage(e){
        // notar sendmsg fallið á server sem að tekur roomName og currmessage
        e.preventDefault();
        const message = this.state.message;
        this.setState({message: ''});
        console.log(message);
        if(message !== ''){
            socket.emit('sendmsg', { roomName: this.props.room.room, msg: message });
        }
        else{
            return false;
        }
    }
    onInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    openForm() {
        document.getElementById("myForm").style.display = "block";
    }
      
    closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
    render() {
        //const { users, messages, message } = this.state; 
        const { room } = this.props.room;
        const { message } = this.state.message;
        return (
            <>
                <div className="chat-window">
                    <h3 className="text-center">Chat room: { room }</h3>
                    <Messages messages={ this.state.messageHistory }/>
                    <Users users={ this.state.users }/>
                </div>
                <form action=""  onSubmit={e => this.sendMessage(e)} className="form-horizontal">
                    <div className="form-goup">
                    <input type="text" placeholder="Type your message..." name="message" id="message" value={ message } onChange={e => this.onInput(e)} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Send" className="btn btn-primary" />
                    </div>
                </form>
                <h3 className="text-center" onClick={() => this.openForm()}>Private messages:</h3>
                <div className="chat-window" id="myForm">
                    <form action="" className="form-container">
                            <textarea placeholder="Type message.." name="msg" required></textarea>

                            <button type="submit" className="btn">Send</button>
                            <button type="button" className="btn cancel" onClick={() => this.closeForm()}>Close</button>
                    </form>
                </div>
            </>
        );
    }
};


const mapStateToProps = ({ user, room }) => {
    return {
        user,
        room
    };
};
export default connect(mapStateToProps)(ChatWindow);