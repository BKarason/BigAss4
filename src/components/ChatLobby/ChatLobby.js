import React from 'react';
import { socket } from '../../services/socketService';


class ChatLobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availRooms: {}
        }
    }
    componentDidMount() {
        socket.emit('rooms');
        socket.on('roomlist', availRooms => this.setState({availRooms}));
    }
    joinRoom(e){
        console.log("suck my cuck");
    }
    render(){
        console.log(this.state);
        var allRooms = [];
        Object.keys(this.state.availRooms).forEach(function(key) {
        allRooms.push(<div key={key}><button type="button" key={key} name={key}></button> { key } </div>)
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