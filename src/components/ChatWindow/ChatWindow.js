import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';
import Users from '../Users/Users';
import Messages from '../Messages/Messages';
import { changeRoom } from '../../actions/roomActions';
import Header from '../Header/index';
import { roomOps } from '../../actions/opActions';
import { roomUsers } from '../../actions/usersActions';


class ChatWindow extends React.Component{
    componentDidMount() {
        socket.on('kicked', (room, kicked, user) => {
            if(kicked == this.props.user.user){
                this.props.changeRoom('');
                this.props.history.push('/lobby');
            }
        });
        socket.on('updateusers', (room, roomUsers, roomOps) =>{
            if(room == this.props.room.room){
                this.setState({users: roomUsers, ops: roomOps});
                this.props.roomOps(roomOps);
                this.props.roomUsers(roomUsers);
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
            message: "",
            op: false
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
            this.setState({message: ''});
        }
        else{
            return false;
        }
    }
    leaveRoom(e){
        e.preventDefault();
        socket.emit('partroom', this.props.room.room);
        this.props.changeRoom('');
        this.props.history.push('/lobby');
    }
    onInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    openForm() {
        document.getElementById("prvtmsg").style.display = "block";
    }
      
    closeForm() {
        document.getElementById("prvtmsg").style.display = "none";
    }
    render() {
        //const { users, messages, message } = this.state; 
        const { room } = this.props.room;
        const { message } = this.state;
        const { op } = this.state;
        return (
            <>
            
            <Header/>
                <button type="button" className="leaveButton" onClick={e => this.leaveRoom(e)}>Leave Room</button>
                <div className="chat-window">
                    <h2 className="text-center header">Chat room: { room }</h2>
                    <Messages messages={ this.state.messageHistory }/>
                    <Users users={ this.state.users } ops={ this.state.ops }/>
                    <div className="input-container">
                        <input type="text" value={ message } name="message" onChange={e => this.onInput(e)} placeholder="Type your message.."/>
                        <button type="button" onClick={e => this.sendMessage(e)}>Send</button>
                    </div>
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
export default connect(mapStateToProps, { changeRoom, roomOps, roomUsers })(ChatWindow);