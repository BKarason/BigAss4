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
            roomName: ''
        }
    }
    createRoom(e) {
        e.preventDefault();
        const roomName = this.state.roomName;
        this.props.changeRoom(roomName);
        console.log(roomName);
        if(roomName !== ''){
            socket.emit('joinroom', { room: roomName }, success => {
                if(success){
                    //socket.emit('rooms');
                    console.log("room  created!");
                    this.props.history.push('/chatwindow');
                }
                else{
                    console.log('Error creating room!');
                }
            });
        }
        
    }
    
    joinRoom(e) {
        e.preventDefault();
        this.props.changeRoom(e.target.name);
        socket.emit('joinroom', { room: e.target.name }, success => {
            if(success){
                //socket.emit('rooms');
                console.log('joined room:');
                this.props.history.push('/chatwindow');
            }
            else{
                console.log('join failed');
            }
        });
    }
    onInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render(){
        console.log(this.state);
        var allRooms = [];
        const { roomName } = this.state.roomName;
        //const { roomName } = this.state.roomName;
        Object.keys(this.state.availRooms).forEach(key => {
            allRooms.push(<div key={key}><button type="button" key={key} name={key} onClick={e => this.joinRoom(e)}>{ key }</button></div>);
        });
        return (
            <div>
                <h1 className="text-center" style={{marginTop: 40 }}>Chat.io</h1>
                { allRooms }
                <form action="" name={ roomName } onSubmit={e => this.createRoom(e)} className="form-horizontal">
                    <div className="form-goup">
                    <input type="text" name="roomName" id="roomName" value={ roomName } onChange={e => this.onInput(e)} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create room!" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
};

export default connect(null, { changeRoom })(ChatLobby);