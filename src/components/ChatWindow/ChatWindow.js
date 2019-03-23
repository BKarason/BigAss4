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
    sendMessage(message){
        // notar sendmsg fallið á server sem að tekur roomName og currmessage
    }
    render() {
        //const { users, messages, message } = this.state; 
        const { room } = this.props.room;
        return (
            <>
                <div className="chat-window">
                    <p className="text-center">Chat room: { room }</p>
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