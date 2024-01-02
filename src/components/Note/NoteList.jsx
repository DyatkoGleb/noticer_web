import NoteItem from './NoteItem'


const NoteList = ({ notes, deleteNote }) => {
    if (!notes.length) {
        return (
            <div>No notes available</div>
        )
    }

    return (
        <div>
            {notes.map(note =>
                <NoteItem key={note.id} data={note} deleteNote={deleteNote}/>
            )}
        </div>
    )
}


export default NoteList