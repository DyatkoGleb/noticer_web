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


const NoticeList = ({notices, isLoadAllNotices, setIsLoadAllNotices}) => {
    if (!notices.length) {
        return (
            <div>No notes available</div>
        )
    }

    const handleLoadButtonClick = () => {
        setIsLoadAllNotices(!isLoadAllNotices)
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="mt-3 mb-3">Notices</h2>
                <NoticeSwitcher onClick={handleLoadButtonClick}>
                    {isLoadAllNotices ? (
                        <IconChecked/>
                    ) : (
                        <IconUnchecked/>
                    )}
                </NoticeSwitcher>
            </div>

            {notices.map(notice => (
                <NoticeItem key={notice.id} data={notice} />
            ))}
        </div>
    )
}


export default NoticeList