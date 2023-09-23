import styled from 'styled-components'


const ContentContainer = styled.div`
  max-width: 1000px;
  padding: 0 50px;
  margin: auto;
`


const ContentWrapper = ({children}) => {
    return (
        <ContentContainer>
            {children}
        </ContentContainer>
    )
}

export default ContentWrapper