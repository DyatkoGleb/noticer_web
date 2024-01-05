import React, {useEffect, useRef, useState} from 'react'
import Header from './components/Header/Header'
import ContentWrapper from './components/UI/ContentWrapper'
import NewNoteForm from './components/NoteCreateForm/NewNoteForm'
import './assets/scss/style.scss'
import ErrorList from './components/Error/ErrorList'
import NoteListWrapper from './components/Note/NoteListWrapper'
import NoticeListWrapper from './components/Notice/NoticeListWrapper'
import {useNotesFetching} from './hooks/useNotesFetching'
import {useNoticesFetching} from './hooks/useNoticesFetching'
import {useAddNote} from './hooks/useAddNote'
import {useDeleteNote} from './hooks/useDeleteNote'
import {useDeleteNotice} from './hooks/useDeleteNotice'


function App() {
    const [showAboutProject, setShowAboutProject] = useState(false)
    const [isLoadAllNotices, setIsLoadAllNotices] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [typeNewNote, setTypeNewNote] = useState('')
    const inputRef = useRef(null)
    const [errors, setErrors] = useState([])
    const [notes, setNotes, isNotesLoading, noteError, setNoteError, fetchNotes] = useNotesFetching()
    const [notices, setNotices, isNoticesLoading, noticeError, setNoticeError, fetchNotices] = useNoticesFetching(isLoadAllNotices)
    const [noteIdForDeleting, setNoteIdForDeleting] = useState(null)
    const [noticeIdForDeleting, setNoticeIdForDeleting] = useState(null)
    const [deleteNoteHook, isNoteDeleting, deletingNoteError, setDeletingNoteError] = useDeleteNote(noteIdForDeleting)
    const [deleteNoticeHook, isNoticeDeleting, deletingNoticeError, setDeletingNoticeError] = useDeleteNotice(noticeIdForDeleting)
    const [addNote, addingNoteError, setAddingNoteError] = useAddNote(
        inputValue,
        setInputValue,
        typeNewNote,
        setTypeNewNote,
        inputRef,
        notes,
        setNotes,
        notices,
        setNotices
    )

    const deleteNote = (noteId) => {
        setNoteIdForDeleting(noteId)
    }

    useEffect(() => {
        if (noteIdForDeleting !== null) {
            deleteNoteHook()

            if (!deletingNoteError) {
                setNotes(
                    [...notes].filter(note => note.id !== noteIdForDeleting)
                )
            }

            setNoteIdForDeleting(null)
        }
    }, [noteIdForDeleting, deleteNoteHook, deletingNoteError, setNotes])

    const deleteNotice = (noticeId) => {
        setNoticeIdForDeleting(noticeId)
    }

    useEffect(() => {
        if (noticeIdForDeleting !== null) {
            deleteNoticeHook()

            if (!deletingNoticeError) {
                setNotices(
                    [...notices].filter(notice => notice.id !== noticeIdForDeleting)
                )
            }

            setNoticeIdForDeleting(null)
        }
    }, [noticeIdForDeleting, deleteNoticeHook, deletingNoticeError, setNotices])


    const errorHandlers = {
        'load notes': setNoteError,
        'load notices': setNoticeError,
        'addNote': setAddingNoteError,
        'deleteNote': setDeletingNoteError,
        'deleteNotice': setDeletingNoticeError
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
            message: `Error with ${where}: ${textError}`
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
        }, 5000)
    }

    const removeError = (errorId) => {
        const updatedItems = errors.filter(error => error.id !== errorId)
        setErrors(updatedItems)
    }

    useEffect(() => { fetchNotes() }, [])
    useEffect(() => { fetchNotices() }, [isLoadAllNotices])
    useEffect(() => { addError(noteError, 'load notes') }, [noteError])
    useEffect(() => { addError(noticeError, 'load notices') }, [noticeError])
    useEffect(() => { addError(addingNoteError, 'addNote') }, [addingNoteError])
    useEffect(() => { addError(deletingNoteError, 'deleteNote') }, [deletingNoteError])
    useEffect(() => { addError(deletingNoticeError, 'deleteNotice') }, [setDeletingNoticeError])

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
                    typeNewNote={typeNewNote}
                    setTypeNewNote={setTypeNewNote}
                />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <NoteListWrapper
                            isNotesLoading={isNotesLoading}
                            notes={notes}
                            deleteNote={deleteNote}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <NoticeListWrapper
                            isNoticesLoading={isNoticesLoading}
                            notices={notices}
                            isLoadAllNotices={isLoadAllNotices}
                            setIsLoadAllNotices={setIsLoadAllNotices}
                            deleteNotice={deleteNotice}
                        />
                    </div>
                </div>
            </ContentWrapper>

            <ErrorList errors={errors} showAboutProject={showAboutProject} removeError={removeError}/>
        </div>
    )
}


export default App
