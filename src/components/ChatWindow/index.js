import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';

class ChatWindow extends React.Component{
    componentDidMount() {
        // tengja við ákveðið room sem að notandinn er í og 
        //fá messages og users fyrir það
    }
    constructor(props) {
        super(props);
        this.state = {
            // users 
            //og messages 
            // og curr message fyrir room'ið sem að user er í 
        }
    }
    sendMessage(message){
        // notar sendmsg fallið á server sem að tekur roomName og currmessage
    }
    render() {
        //const { users, messages, message } = this.state; 
        return (
            <div className="chat-window">
                <p>{this.state.room}</p>
            </div>
        );
    }
};
const mapStateToProps = ({ room }) => {
    return {
        room
    };
};
export default connect(mapStateToProps)(ChatWindow);