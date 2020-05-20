import React from 'react';

const Note = (props) => {
    return (
        <div className='note'>
            <h1> Title: </h1>
            <p> Content: </p>
            <h1> Title: {props.topic} </h1>
            <p> Content: {props.content} </p>
            <p>{props.date}</p>
        </div>
    )
}

export default Note;