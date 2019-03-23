import React from 'react';

const Messages = props => {
    return(
        <div className="messages">
            { props.messages.map(m => <div key={ m } className="messages">{ m }</div>)}
        </div>
    )
    
};

export default Messages;