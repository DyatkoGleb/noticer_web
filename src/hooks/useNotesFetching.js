import { useState } from 'react'
import { useFetching } from './useFetching'
import NoteService from '../api/NoteService'

export const useNotesFetching = () => {
    const [notes, setNotes] = useState([])

    const [fetchNotes, isNotesLoading, noteError, setNoteError] = useFetching(async () => {
        const notes = await NoteService.fetchNotes()
        setNotes(notes.data.data)
    })

    return [notes, setNotes, isNotesLoading, noteError, setNoteError, fetchNotes]
}
