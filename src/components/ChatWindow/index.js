import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';

class ChatWindow extends React.Component{
    componentDidMount() {
        socket.on('roomlist', availRooms => this.setState({availRooms}));
        //tengja við ákveðið room sem að notandinn er í og 
        //fá messages og users fyrir það
    }
    constructor(props) {
        super(props);
        this.state = {
            availRooms: {},
            myRoom: {}
            //og messages 
            // og curr message fyrir room'ið sem að user er í 
        }
    }
    sendMessage(message){
        // notar sendmsg fallið á server sem að tekur roomName og currmessage
    }
    render() {
        const { user } = this.props.user;
        //const { users, messages, message } = this.state; 
        return (
            <>
                <div className="chat-window">
                    <p>{ user }</p>
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