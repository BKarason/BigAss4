import React from 'react';
import PropTypes from 'prop-types';

class Ops extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        var ops = [];
        Object.keys(this.props.ops).forEach(key => {
            ops.push(<div key={key} className="user">*{key}</div>)
        });
        return(
            <div className="users">
                <h3>Users:</h3>
                { ops }
            </div>
        )
    }
};

Ops.propTypes = {
    ops: PropTypes.object.isRequired
};

export default Ops;