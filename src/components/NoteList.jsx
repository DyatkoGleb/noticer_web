import React, { useState, useEffect } from 'react';
import axios from "axios";

const NoteList = () => {
    const [notes, setNotes] = useState({});

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }

        axios.get('http://localhost:8008/getNotes', { headers })
        .then(response => {
            setNotes(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

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
    );
}

export default NoteList