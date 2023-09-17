import { sendNote } from '../api'


const NewNoteForm = () => {
    const addNewNote = () => {
		const input = document.getElementById('input')
	
		if (sendNote(input.value)) {
			input.value = ''
			input.focus()
		}
    }

    return (
		<div className="d-flex justify-content-center align-items-center" id="form">
			<input
				className="add-note-input"
				id="input"
				type="text"
				placeholder="24.01.2023 11:11 Text.."
				autoFocus
			></input>
			<input
				className="add-note-btn"
				id="btn-add"
				type="button"
				value="Добавить"
				onClick={addNewNote}
			></input>
		</div>
    )
}


export default NewNoteForm