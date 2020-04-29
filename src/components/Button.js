import React from 'react';

class Button extends React.Component {
    render(){
        let classes = 'btn ' + this.props.classes;
        return (
            <button className={classes}>
                {this.props.textContent}
            </button>
        );
    }
}

export default Button;
