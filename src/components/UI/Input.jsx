import React from 'react'
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


const Input = React.forwardRef((props, ref) => {
    return (
        <StyledInput
            type="text"
            placeholder="24.01.2023 11:11 Text.."
            ref={ref}
            {...props}
        />
    )
})


export default Input