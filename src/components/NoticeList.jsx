import React, { useState, useEffect } from 'react'
import { useFetchNotices } from '../api'

const NoticeList = () => {
    const fetchNotices = useFetchNotices()

    const [notices, setNotices] = useState([])

    useEffect(() => {
        fetchNotices()
            .then(data => {
                setNotices(data)
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }, [fetchNotices])

    return (
        <div>
            <h2>Notices</h2>
            <ul>
            {Array.isArray(notices) && notices.length > 0 ? (
                notices.map(notice => (
                <li key={notice.id}>{notice.text} - {notice.datetime}</li>
                ))
            ) : (
                <li>No notices available</li>
            )}
            </ul>
        </div>
    );
}

export default NoticeList