import NoteService from '../api/NoteService'
import { useFetching } from './useFetching'


export const useDeleteNotice = (id) => {
    const [deleteNotice, isNoticeDeleting, deletingNoticeError, setDeletingNoticeError] = useFetching(async () => {
        await NoteService.deleteNotice(id)
    })

    return [deleteNotice, isNoticeDeleting, deletingNoticeError, setDeletingNoticeError]
}
