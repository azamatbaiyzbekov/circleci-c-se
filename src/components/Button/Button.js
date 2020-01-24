import React from 'react';

const Button = (props) => {
    return (
        <div>
            <h1>Hi, I am a technical challenge from CircleCI</h1>
            <p>Click the button bellow to see the text</p>
            <button className="Button" onClick={props.clicked}>Toggle Text</button>
        </div>
    )
};

export default Button;