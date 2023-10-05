import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import ContentWrapper from './components/UI/ContentWrapper'
import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import NoticeList from './components/NoticeList'
import './assets/scss/style.scss'
import {fetchAllNotices, fetchCurrentNotices, fetchNotes} from './api'
import {useFetching} from './hooks/useFetching'


function App() {
    const [notes, setNotes] = useState([])
    const [notices, setNotices] = useState([])
    const [isLoadAllNotices, setIsLoadAllNotices] = useState(false)

    const [notesFetching] = useFetching(async () => {
        const notes = await fetchNotes()
        setNotes(notes.data)
    })

    const [noticesFetching] = useFetching(async () => {
        const notices = await (isLoadAllNotices ? fetchAllNotices() : fetchCurrentNotices())
        setNotices(notices.data)
    })

    useEffect( () => { notesFetching() }, [])
    useEffect(() => { noticesFetching() }, [isLoadAllNotices])

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
