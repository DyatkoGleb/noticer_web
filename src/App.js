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
import {useDataMutation} from './hooks/useDataMutation'
import {useNotesFetching} from './hooks/useNotesFetching'


function App() {
    const [showAboutProject, setShowAboutProject] = useState(false)
    const [notes, setNotes, isNotesLoading, noteError, setNoteError, fetchNotes] = useNotesFetching();
    const [notices, setNotices] = useState([])
    const [isLoadAllNotices, setIsLoadAllNotices] = useState(false)
    const [errors, setErrors] = useState([])
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)

    const [fetchNotices, isNoticesLoading, noticeError, setNoticeError] = useFetching(async () => {
        const notices = await (isLoadAllNotices ? NoteService.fetchAllNotices() : NoteService.fetchCurrentNotices())
        setNotices(notices.data.data)
    })

    const [addNote, isNoteMutating, mutatingNoteError, setAddingNoteError] = useDataMutation(async () => {
        const response = await NoteService.addNote(inputValue)

        if (response.data) {
            setInputValue('')
            inputRef.current.focus()

            const entity = response.data.data

            if (entity.item_type === 'note') {
                setNotes([...notes, entity])
            } else if (entity.item_type === 'notice') {
                setNotices([...notices, entity])
            }
        }
    })

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

    const addNewNote = () => {
        addNote(inputValue)
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

            <ErrorList errors={errors} showAboutProject={showAboutProject} removeError={removeError}/>
        </div>
    )
}


export default App
