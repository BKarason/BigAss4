import React from 'react';

const Messages = props => {
    return(
        <div>
            { props.messages.map(m => <div key={ m }>{ m }</div>)}
        </div>
    )
    
};

export default Messages;