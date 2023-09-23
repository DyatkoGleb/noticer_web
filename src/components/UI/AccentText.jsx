import styled from 'styled-components'


const AccentTextS = styled.span`
    color: #7effa5;
`


const AccentText = ({children}) => {
    return (
        <AccentTextS>{children}</AccentTextS>
    )
}


export default AccentText