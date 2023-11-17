import AccentText from '../UI/AccentText'
import FadedBlock from '../UI/FadedBlock'
import styled from 'styled-components'


const AboutWrapper = styled.div`
    position: absolute;
    top: 50px;
    right: -400px;
    max-width: 400px;
    height: calc(100vh - 50px);
    padding: 20px 30px;
    margin-bottom: 20px;
    background-color: #080808;
    color: #eeeeee;
    user-select: none;
    overflow: auto;
    transition: .3s;
`
const AboutServiceBlock = styled.div`
  margin-bottom: 20px;
`
const ProjectToolbox = styled.a`
    display: flex;
    margin-bottom: 16px;
    margin-top: -10px;
    text-decoration: none;

    &:hover * {
        text-decoration: underline;
    }
`
const GithubIcon = styled.div`
    min-width: 14px;
    min-height: 14px;
    margin-right: 6px;
    background-image: url('https://github.githubassets.com/favicons/favicon-dark.png');
    background-repeat: no-repeat;
    background-size: 100%;
`


const AboutProject = ({ show }) => {
    return (
        <AboutWrapper style={show ? {right: '0px'} : {}}>
            <h4>Noticer</h4>

            <hr/>

            <div>
                <p>Став взрослым, появилось много дел, между которыми нужно впихнуть встречи с друзьями, саморазвитие и чилл, расслабон.</p>
                <p>Поначалу писал себе отложенки в лс tg, но со временем их "возможностей" стало мало и родилась идея этого.</p>
                <p>Здесь можно: написать заметОчку, настрочить тудушек, установить напоминалОчку, которая так же прилетит тебе в тг.</p>
                <hr/>
                <p>Проект:</p>
            </div>

            <AboutServiceBlock>
                <p>
                    <AccentText>
                        NoticerWeb
                    </AccentText>
                    &nbsp;- фронт сего приложения (вы находитесь здесь), написан на голом реакте.
                </p>
                <ProjectToolbox href="https://github.com/DyatkoGleb/noticer_web" target="_blank" tabIndex="-1">
                    <GithubIcon></GithubIcon>
                    <FadedBlock>React</FadedBlock>
                </ProjectToolbox>
            </AboutServiceBlock>

            <AboutServiceBlock>
                <p>
                    <AccentText>
                        NoticerApi
                    </AccentText>
                    &nbsp;- api принимающая и сохраняющая заметки, тудушки и напоминалки из NoticerRequestBot и NoticerWeb,
                    отдаёт на фронт спски оных, имеет ручки для удаления и изменения.
                </p>
                <ProjectToolbox href="https://github.com/DyatkoGleb/noticer_api" target="_blank" tabIndex="-1">
                    <GithubIcon></GithubIcon>
                    <FadedBlock>Python, FastAPI, SQLAlchemy, MySQL</FadedBlock>
                </ProjectToolbox>
            </AboutServiceBlock>

            <AboutServiceBlock>
                <p>
                    <AccentText>
                        NoticerQueue
                    </AccentText>
                    &nbsp;- сервис, запрашивающий раз в день список напоминалок на день и шлющий их в указанное время в NoticerBot для последующией отправки в tg.
                </p>
                <ProjectToolbox href="https://github.com/DyatkoGleb/noticer_queue" target="_blank" tabIndex="-1">
                    <GithubIcon></GithubIcon>
                    <FadedBlock>Python, Сelery, Redis</FadedBlock>
                </ProjectToolbox>
            </AboutServiceBlock>

            <AboutServiceBlock>
                <p>
                    <AccentText>
                        NoticerBot
                    </AccentText>
                    &nbsp;- телеграм бот, принимающий данные для заметок, тудушек, напоминашек и напоминалок их в NoticerApi.
                    Так же отправляет сообщения из NoticerQueue.
                </p>
                <ProjectToolbox href="https://github.com/DyatkoGleb/noticer_bot" target="_blank" tabIndex="-1">
                    <GithubIcon></GithubIcon>
                    <FadedBlock>Python, Pyrogram</FadedBlock>
                </ProjectToolbox>
            </AboutServiceBlock>

            <AboutServiceBlock>
                <p>
                    <AccentText>
                        NoticerKubernetes
                    </AccentText>
                    &nbsp;- в него обёрнуто всё вышеперечисленное.
                </p>
                <ProjectToolbox href="https://github.com/DyatkoGleb/noticer_kubernetes" target="_blank" tabIndex="-1">
                    <GithubIcon></GithubIcon>
                    <FadedBlock>Kubernetes</FadedBlock>
                </ProjectToolbox>
            </AboutServiceBlock>
        </AboutWrapper>
    )
}


export default AboutProject