import ListLoader from './UI/ListLoader'
import NoticeList from './NoticeList'
import IconChecked from './UI/IconChecked'
import IconUnchecked from './UI/IconUnchecked'
import styled from 'styled-components'


const NoticeSwitcher = styled.div`
    color: #6a6a6a;
    font-size: 24px;
    cursor: pointer;
    user-select: none;
`


const NoteListWrapper = ({ isNoticesLoading, notices, isLoadAllNotices, setIsLoadAllNotices}) => {
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


            {isNoticesLoading
                ? <ListLoader/>
                : <NoticeList
                    notices={notices}
                    isLoadAllNotices={isLoadAllNotices}
                    setIsLoadAllNotices={setIsLoadAllNotices}
                />
            }
        </div>
    )
}

export default NoteListWrapper;