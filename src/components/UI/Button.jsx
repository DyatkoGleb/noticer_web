import styled from 'styled-components'


const StyledButton = styled.button`
    margin: 15px;
    padding: 10px 15px;
    background: none;
    background-color: #080808;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: .1s;
  
    &:hover, &:focus {
        color: #7effa5;
        box-shadow: 0 0 8px #285134;
    }
`


const Button = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}


export default Button