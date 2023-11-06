import NoteService from '../api/NoteService'
import {useDataMutation} from "./useDataMutation";

export const useAddNote = (inputValue, setInputValue, inputRef, notes, setNotes, notices, setNotices) => {
    const [addNote, isNoteMutating, mutatingNoteError, setAddingNoteError] = useDataMutation(async () => {
        const response = await NoteService.addNote(inputValue)

        if (response.data) {
            setInputValue('')
            inputRef.current.focus()

            const entity = response.data.data

            if (entity.item_type === 'note') {
                setNotes([...notes, entity])
            } else if (entity.item_type === 'notice') {
                setNotices([...notices, entity])
            }
        }
    })

    return [addNote, mutatingNoteError, setAddingNoteError]
}
