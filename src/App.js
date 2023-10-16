import React, {useEffect, useRef, useState} from 'react'
import Header from './components/Header'
import ContentWrapper from './components/UI/ContentWrapper'
import NewNoteForm from './components/NewNoteForm'
import './assets/scss/style.scss'
import NoteService from './api/NoteService'
import {useFetching} from './hooks/useFetching'
import ErrorList from './components/ErrorList'
import NoteListWrapper from './components/NoteListWrapper'
import NoticeListWrapper from './components/NoticeListWrapper'


function App() {
    const [notes, setNotes] = useState([])
    const [notices, setNotices] = useState([])
    const [isLoadAllNotices, setIsLoadAllNotices] = useState(false)
    const [errors, setError] = useState([])
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)

    const [fetchNotes, isNotesLoading, noteError, setNoteError] = useFetching(async () => {
        const notes = await NoteService.fetchNotes()
        setNotes(notes.data.data)
    })

    const [fetchNotices, isNoticesLoading, noticeError, setNoticeError] = useFetching(async () => {
        const notices = await (isLoadAllNotices ? NoteService.fetchAllNotices() : NoteService.fetchCurrentNotices())
        setNotices(notices.data.data)
    })

    const addNewNote = () => {
        if (NoteService.sendNote(inputValue)) {
            setInputValue('')
            inputRef.current.focus()
        }
    }

    useEffect( () => { fetchNotes() }, [])
    useEffect(() => { fetchNotices() }, [isLoadAllNotices])
    useEffect( () => { addError(noteError, 'notes') }, [noteError])
    useEffect( () => { addError(noticeError, 'notices') }, [noticeError])

    const addError = (textError, where) => {
        if (!textError) return

        const newError = {
            id: where + '_' + Math.floor(Date.now()),
            message: `Error load ${where}: ` + textError
        }

        setError(errors.length ? [newError, ...errors] : textError ? [newError] : [])
        where === 'notes' ? setNoteError(null) : setNoticeError(null)
    }

    const removeError = (errorId) => {
        const updatedItems = errors.filter(error => error.id !== errorId)
        setError(updatedItems)
    }

    return (
        <div>
            <Header />

            <ContentWrapper>
                <NewNoteForm
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    inputRef={inputRef}
                    addNewNote={addNewNote}
                />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <NoteListWrapper isNotesLoading={isNotesLoading} notes={notes} />
                    </div>
                    <div className="col-12 col-md-6">
                        <NoticeListWrapper
                            isNoticesLoading={isNoticesLoading}
                            notices={notices}
                            isLoadAllNotices={isLoadAllNotices}
                            setIsLoadAllNotices={setIsLoadAllNotices}
                        />
                    </div>
                </div>
            </ContentWrapper>

            <ErrorList errors={errors} removeError={removeError}/>
        </div>
    )
}


export default App
