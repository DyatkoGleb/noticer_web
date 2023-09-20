import { useState } from 'react'
import ContentWrapper from './UI/ContentWrapper'
import AboutProject from './AboutProject'
import styled from 'styled-components'


const HeaderBlock = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    background-color: #080808;
`
const Link = styled.a`
    margin-right: 10px;
    font-size: 20px;
    line-height: 50px;
    text-decoration: none;
    color: #ffffff;
`
const BtnAboutProject = styled.button`
    background: none;
    border: none;
    line-height: 50px;
    color: #ffffff;
    cursor: pointer;
    transition: .1s;

    &:hover, &:focus {
        color: #7effa5;
    }
`


const Header = () => {
    const [showAboutProject, setShowAboutProject] = useState(false);

    const togglePopup = (event) => {
        setShowAboutProject(!showAboutProject);

        if (showAboutProject) {
            event.target.blur()
        }
    }

    return (
        <div>
            <HeaderBlock>
                <ContentWrapper>
                    <nav className="d-flex justify-content-between">
                        <div>
                            <Link href="https://dyatko.space/" target="_blank">Dyatko</Link>
                            <Link href="https://dyatko.space/" target="_blank">Noticer</Link>
                        </div>
                        <div>
                            <BtnAboutProject onClick={togglePopup}>О проекте</BtnAboutProject>
                        </div>
                    </nav>
                </ContentWrapper>
            </HeaderBlock>

            <AboutProject show={showAboutProject}/>
        </div>
    )
}


export default Header