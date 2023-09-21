import { useState, useEffect } from 'react'
import { fetchAllNotices, fetchCurrentNotices } from '../api'
import NoticeItem from './NoticeItem'
import styled from 'styled-components'
import IconChecked from './UI/IconChecked'
import IconUnchecked from './UI/IconUnchecked'


const NoticeSwitcher = styled.div`
    color: #6a6a6a;
    font-size: 24px;
    cursor: pointer;
    user-select: none;
`


const NoticeList = () => {
    const [loadAll, setLoadAll] = useState(false)
    const [notices, setNotices] = useState([])

    const handleLoadButtonClick = (event) => {
        setLoadAll(!loadAll)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (loadAll ? fetchAllNotices() : fetchCurrentNotices())
                setNotices(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [loadAll])

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="mt-3 mb-3">Notices</h2>
                <NoticeSwitcher onClick={handleLoadButtonClick}>
                    {loadAll ? (
                        <IconChecked/>
                    ) : (
                        <IconUnchecked/>
                    )}
                </NoticeSwitcher>
            </div>
            {Array.isArray(notices) && notices.length > 0 ? (
                notices.map(notice => (
                    <NoticeItem key={notice.id} data={notice}></NoticeItem>
                ))
            ) : (
                <div>No notices available</div>
            )}
        </div>
    )
}


export default NoticeList