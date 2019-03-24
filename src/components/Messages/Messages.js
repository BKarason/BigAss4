import React from 'react';
import PropTypes from 'prop-types';

const Messages = props => {
    return(
        <div className="messages">
            { props.messages.map(m => <div key={ m.timestamp } className="messages">{ m.nick }: { m.message }</div>)}
        </div>
    )
};

Messages.propTypes = {
    messages: PropTypes.array.isRequired
};

export default Messages;