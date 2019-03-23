import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';

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
    render() {
        //const { users, messages, message } = this.state; 
        const { room } = this.props.room;
        const { message } = this.state.message;
        return (
            <>
                <div className="chat-window">
                    <p className="text-center">Chat room: { room }</p>
                </div>
                <form action=""  onSubmit={e => this.sendMessage(e)} className="form-horizontal">
                    <div className="form-goup">
                    <input type="text" placeholder="Type your message..." name="message" id="message" value={ message } onChange={e => this.onInput(e)} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Send" className="btn btn-primary" />
                    </div>
                </form>
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