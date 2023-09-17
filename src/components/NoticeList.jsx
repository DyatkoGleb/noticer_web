import { useState, useEffect } from 'react'
import { useFetchNotices } from '../api'
import NoticeItem from "./NoticeItem";


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
            <h2 className="mt-3 mb-4">Notices</h2>

            {Array.isArray(notices) && notices.length > 0 ? (
                notices.map(notice => (
                    <NoticeItem data={notice}></NoticeItem>
                ))
            ) : (
                <div>No notices available</div>
            )}
        </div>
    );
}


export default NoticeList