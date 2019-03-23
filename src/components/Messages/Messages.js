import React from 'react';


const Messages = props => {
    return(
        <div className="messages">
            { props.messages.map(m => <div key={ m.timestamp } className="messages">{ m.nick }: { m.message }</div>)}
        </div>
    )
    
};

export default Messages;