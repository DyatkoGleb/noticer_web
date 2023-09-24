import NoteItem from './NoteItem'


const NoteList = ({notes}) => {
    if (!notes.length) {
        return (
            <div>No notes available</div>
        )
    }

    return (
        <div>
            <div className="row">
                <h2 className="mt-3 mb-3">Notes</h2>
            </div>

            {notes.map(note =>
                <NoteItem key={note.id} data={note}></NoteItem>
            )}
        </div>
    )
}


export default NoteList