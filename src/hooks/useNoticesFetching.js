import { useState } from 'react'
import { useFetching } from './useFetching'
import ApiService from '../api/ApiService'

export const useNoticesFetching = (isLoadAllNotices) => {
    const [notices, setNotices] = useState([])

    const [fetchNotices, isNoticesLoading, noticeError, setNoticeError] = useFetching(async () => {
        const notices = await (isLoadAllNotices ? ApiService.fetchAllNotices() : ApiService.fetchCurrentNotices())
        setNotices(notices.data.data)
    })

    return [notices, setNotices, isNoticesLoading, noticeError, setNoticeError, fetchNotices]
}
