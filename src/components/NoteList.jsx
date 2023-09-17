import { useState, useEffect } from 'react'
import { useFetchNotes } from '../api'
import NoteItem from './NoteItem'

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
                {Array.isArray(notes) && notes.length > 0 ? (
                    notes.map(note => (
                        <NoteItem data={note}></NoteItem>
                    ))
                ) : (
                    <div>No notes available</div>
                )}
        </div>
    )
}

export default NoteList