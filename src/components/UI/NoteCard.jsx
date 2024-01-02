import styled from 'styled-components'
import {useState} from 'react'


const StyledDiv = styled.div`
    position: relative;
    margin: 10px 0;
    padding: 15px 20px;
    border-radius: 20px;
    background-color: #080808;
    color: #eeeeee;
    cursor: pointer;
    transition: .1s;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0 8px #285134;
    }
`

const BtnNoteRemoving = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 45px;
    height: 100%;
`


const NoteCard = ({ deleteNote, noteId, children }) => {
    const [isHovered, setHovered] = useState(false)
    const removingStyle = { boxShadow: '0 0 8px #592222'}

    return (
        <StyledDiv style={isHovered ? removingStyle : null}>
            <BtnNoteRemoving
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => deleteNote(noteId)}
            />
            {children}
        </StyledDiv>
    )
}


export default NoteCard