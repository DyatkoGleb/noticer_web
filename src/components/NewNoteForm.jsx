import React from "react"
import { sendNote } from '../api';


const NewNoteForm = () => {
    const addNewNote = () => {
		const input = document.getElementById('input')
	
		if (sendNote(input.value)) {
			input.value = ''
			input.focus()
		}
    }

    return (
        <div className="content">
            <div className="d-flex content-center align-center" id="form">
                <input 
					className="input" 
					id="input" 
					type="text" 
					placeholder="24.01.2023 11:11 Text.." 
					autoFocus
                ></input>
                <input 
					className="btn" 
					id="btn-add" 
					type="button" 
					value="Добавить"
					onClick={addNewNote}
                ></input>
            </div>
        </div>
    )
}


export default NewNoteForm