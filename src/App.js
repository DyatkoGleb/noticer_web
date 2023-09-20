import React from 'react'
import Header from './components/Header'
import ContentWrapper from './components/UI/ContentWrapper'
import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import NoticeList from './components/NoticeList'
import './assets/scss/style.scss'


function App() {
    return (
        <div>
            <Header></Header>

            <ContentWrapper>
                <NewNoteForm></NewNoteForm>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <NoteList></NoteList>
                    </div>
                    <div className="col-12 col-md-6">
                        <NoticeList></NoticeList>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}


export default App
