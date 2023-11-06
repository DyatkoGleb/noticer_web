import { useState } from 'react'
import { useFetching } from './useFetching'
import NoteService from '../api/NoteService'

export const useNoticesFetching = (isLoadAllNotices) => {
    const [notices, setNotices] = useState([])

    const [fetchNotices, isNoticesLoading, noticeError, setNoticeError] = useFetching(async () => {
        const notices = await (isLoadAllNotices ? NoteService.fetchAllNotices() : NoteService.fetchCurrentNotices())
        setNotices(notices.data.data)
    })

    return [notices, setNotices, isNoticesLoading, noticeError, setNoticeError, fetchNotices]
}
