import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';

class ChatWindow extends React.Component{
    componentDidMount() {
        const room = this.props.room;
        console.log("hérna");
        console.log(this.props.room);
        //tengja við ákveðið room sem að notandinn er í og 
        //fá messages og users fyrir það
    }
    constructor(props) {
        super(props);
        this.state = {
            availRooms: {},
            //og messages 
            // og curr message fyrir room'ið sem að user er í 
        }
    }
    sendMessage(message){
        // notar sendmsg fallið á server sem að tekur roomName og currmessage
    }
    render() {
        const { room } = this.props.room;
    
        //const { users, messages, message } = this.state; 
        return (
            <>
                <div className="chat-window">
                    <p>{ room }</p>
                </div>
            </>
        );
    }
};


const mapStateToProps = ({ room, rooms }) => {
    return {
        room, rooms
    };
};
export default connect(mapStateToProps)(ChatWindow);