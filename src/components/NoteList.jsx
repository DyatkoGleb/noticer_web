import React, { useState, useEffect } from 'react'
import { useFetchNotes } from '../api'

const NoteList = () => {
    const fetchNotes = useFetchNotes()

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes()
            .then(data => {
                setNotes(data)
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }, [fetchNotes])

    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {Array.isArray(notes) && notes.length > 0 ? (
                    notes.map(note => (
                    <li key={note.id}>{note.text}</li>
                    ))
                ) : (
                    <li>No notes available</li>
                )}
            </ul>
        </div>
    )
}

export default NoteList