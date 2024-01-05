import NoteCard from '../UI/NoteCard'
import styled from 'styled-components'
import IconCheckmark from '../UI/IconCheckmark'


const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
    color: #6a6a6a;
    font-size: 12px;
`


const NoticeItem = ({ deleteNotice, ...props }) => {
    const notice = props.data

    return (
        <NoteCard entityId={notice.id} deleteEntity={deleteNotice}>
            <StyledDiv>
                {notice.datetime}
                {notice.status === 'past' && <IconCheckmark />}
            </StyledDiv>
            <div>{notice.text}</div>
        </NoteCard>
    )
}


export default NoticeItem