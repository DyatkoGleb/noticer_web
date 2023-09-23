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
                console.error('Error:', error)
            })
    }, [fetchNotes])
    
    return (
        <div>
            <div className="row">
                <h2 className="mt-3 mb-3">Notes</h2>
            </div>

            {notes.length ? (
                notes.map(note => (
                    <NoteItem key={note.id} data={note}></NoteItem>
                ))
            ) : (
                <div>No notes available</div>
            )}
        </div>
    )
}


export default NoteList