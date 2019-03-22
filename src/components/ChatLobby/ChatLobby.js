import React from 'react';
import { socket } from '../../services/socketService';
import { connect } from 'react-redux';
import { changeRoom } from '../../actions/roomActions';


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
        const { changeRoom } = this.props;
        const room = e.target.name
        changeRoom(room);
        socket.emit('joinroom', { room: e.target.name}, success => {
            if(success){
                console.log('joined room:');
                this.props.history.push('/chatwindow');
            }
            else{
                console.log('join failed');
            }
        });
    }
    render(){
        console.log(this.state);
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

export default connect(null, { changeRoom })(ChatLobby);