import FadedText from '../UI/FadedText'
import Button from '../UI/Button'
import Input from '../UI/Input'
import NoteTypeSelector from './NoteTypeSelector'


const NewNoteForm = ({ inputValue, setInputValue, inputRef, addNewNote, typeNewNote, setTypeNewNote }) => {
	const handleButtonClick = () => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}

	return (
		<div className="d-flex justify-content-center align-items-start" id="form">
			<NoteTypeSelector
				typeNewNote={typeNewNote}
				setTypeNewNote={setTypeNewNote}
				onButtonClick={handleButtonClick}
			/>
			<Input
				value={inputValue}
				onInput={e => setInputValue(e.target.textContent)}
				ref={inputRef}
			/>
			<Button onClick={addNewNote}>
				<FadedText>Добавить</FadedText>
			</Button>
		</div>
	)
}


export default NewNoteForm