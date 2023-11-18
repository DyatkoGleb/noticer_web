import NoteItem from './NoteItem'


const NoteList = ({notes}) => {
    if (!notes.length) {
        return (
            <div>No notes available</div>
        )
    }

    return (
        <div>
            {notes.map(note =>
                <NoteItem key={note.id} data={note} />
            )}
        </div>
    )
}


export default NoteList