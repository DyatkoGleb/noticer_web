import { useState, useRef } from 'react'
import NoteService from '../api/NoteService'
import FadedText from './UI/FadedText'
import Button from './UI/Button'
import Input from './UI/Input'


const NewNoteForm = () => {
	const [inputValue, setInputValue] = useState('')
	const inputRef = useRef(null)

	const addNewNote = () => {
		if (NoteService.sendNote(inputValue)) {
			setInputValue('')
			inputRef.current.focus()
		}
	}

    return (
		<div className="d-flex justify-content-center align-items-center" id="form">
			<Input
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				ref={inputRef}
			/>
			<Button onClick={addNewNote}>
				<FadedText>Добавить</FadedText>
			</Button>
		</div>
    )
}


export default NewNoteForm