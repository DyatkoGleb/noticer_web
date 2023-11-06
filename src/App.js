import React, {useEffect, useRef, useState} from 'react'
import Header from './components/Header'
import ContentWrapper from './components/UI/ContentWrapper'
import NewNoteForm from './components/NewNoteForm'
import './assets/scss/style.scss'
import ErrorList from './components/ErrorList'
import NoteListWrapper from './components/NoteListWrapper'
import NoticeListWrapper from './components/NoticeListWrapper'
import {useNotesFetching} from './hooks/useNotesFetching'
import {useNoticesFetching} from './hooks/useNoticesFetching'
import {useAddNote} from './hooks/useAddNote'


function App() {
    const [showAboutProject, setShowAboutProject] = useState(false)
    const [isLoadAllNotices, setIsLoadAllNotices] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)
    const [errors, setErrors] = useState([])
    const [notes, setNotes, isNotesLoading, noteError, setNoteError, fetchNotes] = useNotesFetching()
    const [notices, setNotices, isNoticesLoading, noticeError, setNoticeError, fetchNotices] = useNoticesFetching(isLoadAllNotices)
    const [addNote, mutatingNoteError, setAddingNoteError] = useAddNote(
        inputValue,
        setInputValue,
        inputRef,
        notes,
        setNotes,
        notices,
        setNotices
    )

    const errorHandlers = {
        notes: setNoteError,
        notices: setNoticeError,
        addNote: setAddingNoteError
    }

    const togglePopup = (event) => {
        setShowAboutProject(!showAboutProject)

        if (showAboutProject) {
            event.target.blur()
        }
    }

    const addError = (textError, where) => {
        if (!textError) return

        const newError = {
            id: where + '_' + Date.now().toString(36) + Math.random().toString(36),
            message: `Error load ${where}: ${textError}`
        }

        setErrors(prevErrors => [newError, ...prevErrors])

        clearHookError(where)
        removeErrorWithDelay(newError.id)
    }

    const clearHookError = (where) => {
        errorHandlers[where](null)
    }

    const removeErrorWithDelay = (errorId) => {
        setTimeout(() => {
            setErrors(prevErrors => prevErrors.filter(error => error.id !== errorId))
        }, 3000)
    }

    const removeError = (errorId) => {
        const updatedItems = errors.filter(error => error.id !== errorId)
        setErrors(updatedItems)
    }

    useEffect(() => { fetchNotes() }, [])
    useEffect(() => { fetchNotices() }, [isLoadAllNotices])
    useEffect(() => { addError(noteError, 'notes') }, [noteError])
    useEffect(() => { addError(noticeError, 'notices') }, [noticeError])
    useEffect(() => { addError(mutatingNoteError, 'addNote') }, [mutatingNoteError])

    return (
        <div>
            <Header
                showAboutProject={showAboutProject}
                togglePopup={togglePopup}
            />

            <ContentWrapper>
                <NewNoteForm
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    inputRef={inputRef}
                    addNewNote={addNote}
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

            <ErrorList errors={errors} showAboutProject={showAboutProject} removeError={removeError}/>
        </div>
    )
}


export default App
