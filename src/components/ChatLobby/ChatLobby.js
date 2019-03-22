import React from 'react';
import { socket } from '../../services/socketService';


class ChatLobby extends React.Component {
    componentDidMount() {
        socket.emit('rooms');
        socket.on('roomlist', availRooms => this.setState({availRooms}));
    }
    
    constructor(props) {
        super(props);
        this.state = {
            availRooms: {},
        }
    }
    
    joinRoom(e) {
        e.preventDefault();
        console.log("hurr i em");
        socket.emit('joinroom', { room: e.target.name}, success => {
            if(success){
                socket.emit('rooms');
                console.log('joined room:');
            }
            else{
                console.log('join failed');
            }
        });
    }
    render(){
        var allRooms = [];
        Object.keys(this.state.availRooms).forEach(key => {
            allRooms.push(<div key={key}><button type="button" key={key} name={key} onClick={e => this.joinRoom(e)}>{ key }</button></div>);
        });
        
        return (
            <div>
                <h1 className="text-center" style={{marginTop: 40 }}>Chat.io</h1>
                { allRooms }
            </div>
        )
    }
};

export default ChatLobby;