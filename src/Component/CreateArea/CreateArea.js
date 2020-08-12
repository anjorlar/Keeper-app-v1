import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false)

    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target

        setNote((initilaValue) => {
            return {
                ...initilaValue,
                [name]: value
            }
        })
    }

    const submitNote = (e) => {
        props.onAdd(note)
        setNote({
            title: '',
            content: ''
        })
        e.preventDefault()
    }

    function expand() {
        setExpanded(true)
    }

    return (
        <div>
            <form className='create-note'>
                {isExpanded ? <input onChange={handleChange} name='title' placeholder='Title' value={note.title} /> : null}
                <textarea onClick={expand} onChange={handleChange} name='content' placeholder='Take a note...' rows={isExpanded ? 3 : 1} value={note.content} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
};

export default CreateArea;