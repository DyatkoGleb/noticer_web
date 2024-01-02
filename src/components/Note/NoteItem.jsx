    import NoteCard from '../UI/NoteCard'


const NoteItem = ({ deleteNote, ...props }) => {
    const note = props.data

    return (
        <NoteCard noteId={note.id} deleteNote={deleteNote}>
            <div>{note.text}</div>
        </NoteCard>
    )
}


export default NoteItem