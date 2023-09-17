import NoteCard from "./UI/NoteCard"
import styled from 'styled-components'


const StyledDiv = styled.div`
    margin-bottom: 13px;
    color: #6a6a6a;
    font-size: 12px;
`;


const NoticeItem = (props) => {
    const notice = props.data

    return (
        <NoteCard>
            <StyledDiv>{notice.datetime}</StyledDiv>
            <div>{notice.text}</div>
        </NoteCard>
    )
}


export default NoticeItem