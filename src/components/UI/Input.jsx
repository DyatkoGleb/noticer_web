import styled from 'styled-components'


const StyledInput = styled.input`
    padding: 8px;
    height: max-content;
    background: none;
    border: none;
    color: white;
    transition: .1s;
  
    &:hover, &:focus {
        background-color: #080808;
        box-shadow: 0 0 8px #285134;
        border-radius: 20px;
    }
`


const Input = ({ children, inputValue, onInputChange, inputRef }) => {
    return (
        <StyledInput
            type="text"
            placeholder="24.01.2023 11:11 Text.."
            autoFocus
            ref={inputRef}
            value={inputValue}
            onChange={(event) => onInputChange(event.target.value)}
        >
            {children}
        </StyledInput>
    )
}


export default Input