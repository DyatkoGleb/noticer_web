import NoteCard from "./UI/NoteCard"


const NoteItem = (props) => {
    const note = props.data

    return (
        <NoteCard>
            <div key={note.id}>{note.text}</div>
        </NoteCard>
    )
}


export default NoteItem