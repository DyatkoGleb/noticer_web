import { useState } from 'react'
import { useFetching } from './useFetching'
import ApiService from '../api/ApiService'

export const useNotesFetching = () => {
    const [notes, setNotes] = useState([])

    const [fetchNotes, isNotesLoading, noteError, setNoteError] = useFetching(async () => {
        const notes = await ApiService.fetchNotes()
        setNotes(notes.data.data)
    })

    return [notes, setNotes, isNotesLoading, noteError, setNoteError, fetchNotes]
}
