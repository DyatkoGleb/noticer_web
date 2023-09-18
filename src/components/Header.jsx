import ContentWrapper from './UI/ContentWrapper'
import styled from 'styled-components'


const HeaderDiv = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    background-color: #080808;
`
const Link = styled.a`
    margin-left: 10px;
    font-size: 20px;
    line-height: 50px;
    text-decoration: none;
    color: #ffffff;
`


const Header = () => {
    return (
        <HeaderDiv>
            <ContentWrapper>
                <Link href="https://dyatko.space">Dyatko</Link>
                <Link href="/">Noticer</Link>
            </ContentWrapper>
        </HeaderDiv>
    )
}


export default Header