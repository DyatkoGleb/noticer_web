import ApiService from '../api/ApiService'
import { useFetching } from './useFetching'


export const useDeleteNotice = (id) => {
    const [deleteNotice, isNoticeDeleting, deletingNoticeError, setDeletingNoticeError] = useFetching(async () => {
        await ApiService.deleteNotice(id)
    })

    return [deleteNotice, isNoticeDeleting, deletingNoticeError, setDeletingNoticeError]
}
