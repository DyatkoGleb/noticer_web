import ApiService from '../api/ApiService'
import { useFetching } from './useFetching'


export const useDeleteNote = (id) => {
    const [deleteNote, isNoteDeleting, deletingNoteError, setDeletingNoteError] = useFetching(async () => {
        await ApiService.deleteNote(id)
    })

    return [deleteNote, isNoteDeleting, deletingNoteError, setDeletingNoteError]
}
