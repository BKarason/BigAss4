import React from 'react';
import { socket } from '../../services/socketService';
import { connect } from 'react-redux';
import { changeRoom } from '../../actions/roomActions';
import PropTypes from 'prop-types';


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
        
        console.log(roomName);
        if(roomName !== ''){
            socket.emit('joinroom', { room: roomName }, success => {
                if(success){
                    //socket.emit('rooms');
                    console.log("room  created!");
                    this.props.changeRoom(roomName);
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
        const roomName = e.target.name;
       
        socket.emit('joinroom', { room: e.target.name }, success => {
            if(success){
                //socket.emit('rooms');
                this.props.changeRoom(roomName);
                this.props.history.push('/chatwindow');
            }
            else{
                alert("you cannot enter this chatroom");
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
                
                <form action="" name={ roomName } onSubmit={e => this.createRoom(e)} className="form-horizontal">
                    <div className="form-goup">
                    <input type="text" name="roomName" id="roomName" value={ roomName } onChange={e => this.onInput(e)} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create room!" className="btn btn-primary" />
                    </div>
                </form>
                { allRooms }
            </div>
        )
    }
};
ChatLobby.propTypes = {
    changeRoom: PropTypes.func.isRequired
};

export default connect(null, { changeRoom })(ChatLobby);