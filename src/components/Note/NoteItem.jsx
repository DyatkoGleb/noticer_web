    import NoteCard from '../UI/NoteCard'


const NoteItem = ({ deleteNote, ...props }) => {
    const note = props.data

    return (
        <NoteCard entityId={note.id} deleteEntity={deleteNote}>
            <div>{note.text}</div>
        </NoteCard>
    )
}


export default NoteItem