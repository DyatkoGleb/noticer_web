    import NoteCard from '../UI/NoteCard'


const NoteItem = (props) => {
    const note = props.data

    return (
        <NoteCard>
            <div>{note.text}</div>
        </NoteCard>
    )
}


export default NoteItem