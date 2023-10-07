import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import ContentWrapper from './components/UI/ContentWrapper'
import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import NoticeList from './components/NoticeList'
import './assets/scss/style.scss'
import NoteService from './api/NoteService'
import {useFetching} from './hooks/useFetching'


function App() {
    const [notes, setNotes] = useState([])
    const [notices, setNotices] = useState([])
    const [isLoadAllNotices, setIsLoadAllNotices] = useState(false)

    const [fetchNotes] = useFetching(async () => {
        const notes = await NoteService.fetchNotes()
        setNotes(notes.data.data)
    })

    const [fetchNotices] = useFetching(async () => {
        const notices = await (isLoadAllNotices ? NoteService.fetchAllNotices() : NoteService.fetchCurrentNotices())
        setNotices(notices.data.data)
    })

    useEffect( () => { fetchNotes() }, [])
    useEffect(() => { fetchNotices() }, [isLoadAllNotices])

    return (
        <div>
            <Header />

            <ContentWrapper>
                <NewNoteForm />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <NoteList notes={notes} />
                    </div>
                    <div className="col-12 col-md-6">
                        <NoticeList notices={notices} isLoadAllNotices={isLoadAllNotices} setIsLoadAllNotices={setIsLoadAllNotices} />
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}


export default App
