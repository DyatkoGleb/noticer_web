import NoteService from '../api/NoteService'
import {useFetching} from './useFetching'


export const useDeleteNote = (id) => {
    const [deleteNote, isNoteDeleting, deletingNoteError, setDeletingNoteError] = useFetching(async () => {
        await NoteService.deleteNote(id)
    })

    return [deleteNote, isNoteDeleting, deletingNoteError, setDeletingNoteError]
}
