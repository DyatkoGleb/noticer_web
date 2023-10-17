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

    const addNewNote = () => {
        addNote(inputValue)
    }

    useEffect(() => { fetchNotes() }, [])
    useEffect(() => { fetchNotices() }, [isLoadAllNotices])
    useEffect(() => { addError(noteError, 'notes') }, [noteError])
    useEffect(() => { addError(noticeError, 'notices') }, [noticeError])
    useEffect(() => { addError(mutatingNoteError, 'addNote') }, [mutatingNoteError])

    const addError = (textError, where) => {
        if (!textError) return

        const newError = {
            id: where + '_' + Math.floor(Date.now()),
            message: `Error load ${where}: ` + textError
        }

        setError(errors.length ? [newError, ...errors] : textError ? [newError] : [])

        switch (where) {
            case 'notes':
                setNoteError(null)
                break
            case 'notices':
                setNoticeError(null)
                break
            case 'addNote':
                setAddingNoteError(null)
                break
        }
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
