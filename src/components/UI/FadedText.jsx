import styled from 'styled-components'


const FadedTextS = styled.span`
    color: #808080;
`


const FadedBlock = (props) => {
    return (
        <div>
            <FadedTextS>{props.children}</FadedTextS>
        </div>
    )
}


export default FadedBlock