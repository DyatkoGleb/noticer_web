import styled from 'styled-components'


const StyledErrorItem = styled.div`
    margin: 10px 10px;
    padding: 15px 20px;
    width: 300px;
    border-radius: 10px;
    background-color: #080808;
    color: #eeeeee;
    cursor: pointer;
    transition: .1s;
    box-shadow: 0 0 4px #962323;
    line-height: 16px;
    user-select: none;
    
    &:hover {
        box-shadow: 0 0 4px #000;
    }
`


const ErrorItem = ({ error, onClick }) => {
    return (
        <StyledErrorItem onClick={onClick}>
            {error.message}
        </StyledErrorItem>
    )
}


export default ErrorItem