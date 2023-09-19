import styled from 'styled-components'


const AccentTextS = styled.span`
    color: #7effa5;
`


const AccentText = (props) => {
    return (
        <AccentTextS>{props.children}</AccentTextS>
    )
}


export default AccentText