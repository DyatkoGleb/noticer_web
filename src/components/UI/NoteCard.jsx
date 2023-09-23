import styled from 'styled-components'


const StyledDiv = styled.div`
    margin: 10px 0;
    padding: 15px 20px;
    border-radius: 20px;
    background-color: #080808;
    color: #eeeeee;
    cursor: pointer;
    transition: .1s;

    &:hover {
        box-shadow: 0 0 8px #285134;
    }
`


const NoteCard = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}


export default NoteCard