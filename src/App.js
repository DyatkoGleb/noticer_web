import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import ContentWrapper from './components/UI/ContentWrapper'
import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import NoticeList from './components/NoticeList'
import './assets/scss/style.scss'
import NoteService from './api/NoteService'
import {useFetching} from './hooks/useFetching'
import ErrorList from './components/ErrorList'


function App() {
    const [notes, setNotes] = useState([])
    const [notices, setNotices] = useState([])
    const [isLoadAllNotices, setIsLoadAllNotices] = useState(false)
    const [errors, setError] = useState([])

    const [fetchNotes, isNotesLoading, noteError, setNoteError] = useFetching(async () => {
        const notes = await NoteService.fetchNotes()
        setNotes(notes.data.data)
    })

    const [fetchNotices, isNoticesLoading, noticeError, setNoticeError] = useFetching(async () => {
        const notices = await (isLoadAllNotices ? NoteService.fetchAllNotices() : NoteService.fetchCurrentNotices())
        setNotices(notices.data.data)
    })

    useEffect( () => { fetchNotes() }, [])
    useEffect(() => { fetchNotices() }, [isLoadAllNotices])
    useEffect( () => { addError(noteError, 'notes') }, [noteError])
    useEffect( () => { addError(noticeError, 'notices') }, [noticeError])

    const addError = (textError, where) => {
        if (!textError) return

        const newError = {
            id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 99999) + 1,
            message: `Error load ${where}: ` + textError
        }

        setError(errors.length ? [newError, ...errors] : textError ? [newError] : [])
        setNoteError(null)
        setNoticeError(null)
    }

    const removeError = (errorId) => {
        const updatedItems = errors.filter(error => error.id !== errorId)
        setError(updatedItems)
    }

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

            <ErrorList errors={errors} removeError={removeError}/>
        </div>
    )
}


export default App
