import { useState, useRef } from 'react'
import { sendNote } from '../api'
import FadedText from './UI/FadedText'
import Button from './UI/Button'
import Input from './UI/Input'


const NewNoteForm = () => {
	const [inputValue, setInputValue] = useState('')
	const inputRef = useRef(null);

	const handleInputChange = (value) => {
		setInputValue(value)
		console.log(inputValue)
	}

	const addNewNote = () => {
		if (sendNote(inputValue)) {
			setInputValue('')
			inputRef.current.focus()
		}
	}

    return (
		<div className="d-flex justify-content-center align-items-center" id="form">
			<Input
				inputValue={inputValue}
				onInputChange={handleInputChange}
				inputRef={inputRef} />
			<Button onClick={addNewNote}>
				<FadedText>Добавить</FadedText>
			</Button>
		</div>
    )
}


export default NewNoteForm