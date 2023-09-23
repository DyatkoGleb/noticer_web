import styled from 'styled-components'


const FadedTextS = styled.span`
    color: #808080;
`


const FadedBlock = ({children}) => {
    return (
        <div>
            <FadedTextS>{children}</FadedTextS>
        </div>
    )
}


export default FadedBlock